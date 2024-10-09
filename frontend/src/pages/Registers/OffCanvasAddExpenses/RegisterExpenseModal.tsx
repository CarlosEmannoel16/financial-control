import { Button, Form, Offcanvas } from "react-bootstrap";
import { useMenuExpenseContext } from "../../../contexts/MenuAddExpenseContext";
import { useQuery } from "@apollo/client";
import { GET_ALL_CREDIT_CARDS } from "../../../service/apollo/queries";
import { useEffect, useState } from "react";

export const RegisterExpenseModal = () => {
  const [creditCard, setCreditCard] = useState([]);
  const [formData, setFormData] = useState<{
    description: string;
    category: string;
    amount: string;
    date: string;
    creditCardId: string;
    bankId: string;
  }>({
    amount: "",
    bankId: "",
    category: "",
    creditCardId: "",
    date: "",
    description: "",
  });

  const { data } = useQuery(GET_ALL_CREDIT_CARDS);

  useEffect(() => {
    if (data?.getAllCreditCards) {
      setCreditCard(data.getAllCreditCards);
    }
  }, [data]);
  const { setShowMenu, showMenu } = useMenuExpenseContext();
  const handleClose = () => setShowMenu(false);

  console.log(creditCard);
  return (
    <>
      <Offcanvas show={showMenu} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cadastrar Despesa</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(event) => {
                setFormData({ ...formData, description: event.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              onChange={(event) => {
                setFormData({ ...formData, amount: event.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              aria-label="Selecione a categoria"
              onChange={(event) => {
                setFormData({ ...formData, category: event.target.value });
              }}
            >
              <option value="credit">Crédito</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cartão</Form.Label>
            <Form.Select aria-label="Selecione a categoria">
              {creditCard.map((card: { id: string; name: string }) => {
                return (
                  <option key={card.id} value={card.id}>
                    {card.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              onChange={(event) => {
                setFormData({ ...formData, date: event.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
