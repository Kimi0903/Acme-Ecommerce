test("Simula endpoint principal", () => {
  const response = { message: "Bienvenido a Acme Ecommerce API 🚀" };
  expect(response.message).toContain("Ecommerce");
});
