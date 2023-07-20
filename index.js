const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal-close-btn")
const consentForm = document.querySelector("#consent-form")
const modalText = document.querySelector(".modal-text")
const modalInner = document.querySelector(".modal-inner")
const declineBtn = document.querySelector("#decline-btn")
const modalChoiceBtns = document.querySelector(".modal-choice-btns")


setTimeout(function() {
    modal.style.display = "inline"
}, 1500)

modalCloseBtn.addEventListener("click", function() {
    modal.style.display = "none"
})

declineBtn.addEventListener("mouseover", function() {
    modalChoiceBtns.classList.toggle("reverse")
})

consentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get('modalName')

    modalText.innerHTML = `
                            <div class="modal-inner-loading">
                                <img src="images/loading.svg" class="loading">
                                <p id="uploadText">
                                    Uploading your data to the dark web...
                                </p>
                            </div>
                            `
    setTimeout(function() {
        document.querySelector("#uploadText").innerText = `Making the sale...`
    }, 3000)

    setTimeout(function() {
        document.querySelector("#modal-inner").innerHTML = `
                    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
                    <p>We just sold the rights to your eternal soul.</p>
                    <div class="idiot-gif">
                        <img src="images/pirate.gif">
                    </div>
                    ` 
    modalCloseBtn.disabled = false
    }, 6000)
})


