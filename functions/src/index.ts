import {onRequest} from "firebase-functions/v2/https";
import * as QRCode from "qrcode";

export const getSessionToken = onRequest(async (request, response) => {
  const token = "qrcode-content"; 

  try {
    const qr = await QRCode.toDataURL(token);
    response.set("Access-Control-Allow-Origin", "*");
    response.json({qrCodeBase64: qr});
  } catch (error) {
    response.status(500).send("Erro ao gerar QRCode");
  }
});
