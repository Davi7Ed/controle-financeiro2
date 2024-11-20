import React, { useState } from "react";
import { jsPDF } from "jspdf"; 
import "jspdf-autotable"; 
import * as C from "./styles";

const BudgetForm = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [meterPrice, setMeterPrice] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const [history, setHistory] = useState({
    meterPrices: ["450.00"],
    dimensions: [{ length: "1000", width: "1000" }],
  });

  const calculateAmount = () => {
    const totalArea = (parseFloat(length) / 1000) * (parseFloat(width) / 1000);
    const totalAmount = parseFloat(meterPrice) * totalArea;
    setAmount(totalAmount.toFixed(2));
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR");

    doc.setFont("Poppins");
    doc.setTextColor(40, 40, 40);
    
    doc.setFontSize(12);
    doc.text("Empresa: Kadosh Vidraçaria e Marcenaria", 20, 45);
    doc.text(`Data: ${formattedDate}`, 20, 55);
    
    doc.setFontSize(20);
    doc.text("Orçamento Detalhado", 105, 20, { align: "center" });

    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.roundedRect(10, 30, 190, 110, 3, 3, "S");

    const formattedAmount = parseFloat(amount).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    doc.text(`Descrição do Produto: ${description}`, 20, 65);
    doc.text(`Cliente: ${name}`, 20, 75);
    doc.text(`Forma de Pagamento: ${paymentMethod}`, 20, 85);
    doc.text(`Dimensões: ${length} x ${width} mm`, 20, 95);
    doc.text(`Valor do Orçamento: ${formattedAmount}`, 20, 105);
    
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Este orçamento é válido por 30 dias.", 105, 290, { align: "center" });

    doc.save("orcamento_detalhado.pdf");
  };

  return (
    <C.Container>
      <C.HeaderTitle>Adicionar Orçamento Automático</C.HeaderTitle>
      
      <C.InputContent>
        <C.Label>Descrição do Produto</C.Label>
        <C.Input value={description} onChange={(e) => setDescription(e.target.value)} />
      </C.InputContent>
      
      <C.InputContent>
        <C.Label>Cliente</C.Label>
        <C.Input value={name} onChange={(e) => setName(e.target.value)} />
      </C.InputContent>
      
      <C.InputContent>
        <C.Label>Forma de Pagamento</C.Label>
        <C.Input value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
      </C.InputContent>
      
      <C.InputContent>
        <C.Label>Valor do Metro (R$)</C.Label>
        <C.Input 
          type="number" 
          value={meterPrice} 
          onChange={(e) => setMeterPrice(e.target.value)} 
          placeholder="Ex: 450.00"
          list="meterPrices"
        />
        <datalist id="meterPrices">
          {history.meterPrices.map((price, index) => (
            <option key={index} value={price} />
          ))}
        </datalist>
      </C.InputContent>
      
      <C.InputContent style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <div>
          <C.Label>Comprimento (mm)</C.Label>
          <C.Input 
            type="number" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            placeholder="Ex: 1000"
            list="lengthHistory"
          />
          <datalist id="lengthHistory">
            {history.dimensions.map((dim, index) => (
              <option key={index} value={dim.length} />
            ))}
          </datalist>
        </div>
        
        <div>
          <C.Label>Largura (mm)</C.Label>
          <C.Input 
            type="number" 
            value={width} 
            onChange={(e) => setWidth(e.target.value)} 
            placeholder="Ex: 1000"
            list="widthHistory"
          />
          <datalist id="widthHistory">
            {history.dimensions.map((dim, index) => (
              <option key={index} value={dim.width} />
            ))}
          </datalist>
        </div>

        <C.Button 
          onClick={calculateAmount} 
          style={{ marginTop: "25px", height: "40px", marginLeft: "50px" }}
        >
          Calcular Valor
        </C.Button>
      </C.InputContent>
      
      <C.InputContent>
        <C.Label>Valor do Orçamento (R$)</C.Label>
        <C.Input 
          type="text" 
          value={amount} 
          readOnly 
          placeholder="Calculado automaticamente"
        />
      </C.InputContent>
      
      <C.Button onClick={handleGeneratePDF}>Gerar PDF</C.Button>
    </C.Container>
  );
};

export default BudgetForm;
