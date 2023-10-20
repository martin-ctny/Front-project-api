import axios from "axios";

const API_URL = "http://localhost:3000/order/";

const createOrder = async (credentials) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        userName: credentials.userName,
        description: credentials.description,
        price: credentials.price,
        isFinished: credentials.isFinished,
        adminId: credentials.adminId,
        userId: credentials.userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const OrderService = {
  createOrder,
};

export default OrderService;
