function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const operator = document.getElementById('operator').value;
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;
  if (!isNaN(num1) && !isNaN(num2)) {
    result = eval(`${num1} ${operator} ${num2}`);
    document.getElementById('calcResult').textContent = `= ${result.toLocaleString()}`;
  }
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;
  const rates = {
    USD: 1,
    NGN: 1500,
    EUR: 0.92,
    GBP: 0.78
  };
  if (from in rates && to in rates && !isNaN(amount)) {
    const result = (amount / rates[from]) * rates[to];
    document.getElementById('currencyResult').textContent = `= ${result.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${to}`;
  }
}

function calculateDiscount() {
  const price = parseFloat(document.getElementById('originalPrice').value);
  const percent = parseFloat(document.getElementById('discountPercent').value);
  const currency = document.getElementById('discountCurrency').value;
  if (!isNaN(price) && !isNaN(percent)) {
    const result = price - (price * (percent / 100));
    document.getElementById('discountResult').textContent = `= ${currency}${result.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  }
}

function calculateProfitMargin() {
  const cost = parseFloat(document.getElementById('costPrice').value);
  const selling = parseFloat(document.getElementById('sellingPrice').value);
  const currency = document.getElementById('profitCurrency').value;
  if (!isNaN(cost) && !isNaN(selling) && cost > 0) {
    const profit = selling - cost;
    const margin = (profit / cost) * 100;
    document.getElementById('profitResult').textContent = `Profit: ${currency}${profit.toLocaleString(undefined, { maximumFractionDigits: 2 })} | Margin: ${margin.toFixed(2)}%`;
  }
}

function calculateUnitPrice() {
  const total = parseFloat(document.getElementById('totalCost').value);
  const qty = parseFloat(document.getElementById('quantity').value);
  if (!isNaN(total) && !isNaN(qty) && qty > 0) {
    const result = total / qty;
    document.getElementById('unitResult').textContent = `= ${result.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  }
}

function calculateBreakEven() {
  const fixed = parseFloat(document.getElementById('fixedCosts').value);
  const variable = parseFloat(document.getElementById('variableCosts').value);
  const selling = parseFloat(document.getElementById('sellingPriceUnit').value);
  if (!isNaN(fixed) && !isNaN(variable) && !isNaN(selling) && (selling - variable) > 0) {
    const result = fixed / (selling - variable);
    document.getElementById('breakEvenResult').textContent = `= ${Math.ceil(result)} units`;
  }
}

function calculateTax() {
  const price = parseFloat(document.getElementById('taxPrice').value);
  const rate = parseFloat(document.getElementById('taxRate').value);
  const mode = document.getElementById('taxMode').value;
  if (!isNaN(price) && !isNaN(rate)) {
    const result = mode === "add"
      ? price + (price * rate / 100)
      : price / (1 + rate / 100);
    document.getElementById('taxResult').textContent = `= ${result.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  }
}

function share(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check out this awesome free profit calculator called Profitlator!");
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${text} ${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`
  };
  window.open(shareLinks[platform], '_blank');
}
