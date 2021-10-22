
const wrapper = document.getElementById("wrapper"); 

data.forEach((item) => {
  wrapper.innerHTML += `
    <div class="btn">
      <button
        class=${item.type}
        value="${item.value}"
        onclick="calculate('${item.value}', '${item.type}')"
      >
        ${item.label}
      </button>
    </div>
  `;
})
