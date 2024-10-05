import { model, Schema } from "mongoose";

const TokenSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: false,
    },
    token: {
      type: String,
      required: true,
    },
    expiration: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const TokenModel = model("Token", TokenSchema);
