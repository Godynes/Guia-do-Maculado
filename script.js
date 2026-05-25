document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".abrir-modal");
    const modais = document.querySelectorAll(".modal");
    const fechar = document.querySelectorAll(".fechar");

    const fecharModal = (modal) => {
        if (!modal) return;
        modal.classList.remove("ativo");
    };

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const modalId = botao.getAttribute("data-modal");
            const modal = document.getElementById(modalId);

            if (!modal) {
                console.warn(`Modal não encontrado: ${modalId}`);
                return;
            }

            modal.classList.add("ativo");
            modal.querySelector(".modal-content")?.focus();
        });
    });

    fechar.forEach(botaoFechar => {
        botaoFechar.addEventListener("click", () => {
            fecharModal(botaoFechar.closest(".modal"));
        });
    });

    modais.forEach(modal => {
        modal.addEventListener("click", (evento) => {
            if (evento.target === modal) {
                fecharModal(modal);
            }
        });
    });

    window.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            const modalAtivo = document.querySelector(".modal.ativo");
            fecharModal(modalAtivo);
        }
    });
});