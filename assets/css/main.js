const numero = 1234567.89

// Formata como moeda em português do Brasil
console.log(
  numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
)
// Saída: R$ 1.234.567,89

// Formata como moeda em japonês
console.log(
  numero.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })
)
// Saída: ￥1,234,568

// Formata datas
const data = new Date()
console.log(data.toLocaleString("pt-BR"))
// Saída: algo como "22/01/2025 10:45:00"
