(function () {
    const menuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });
        });
    }

    const bossLightbox = document.querySelector("#boss-lightbox");
    const bossLightboxImage = document.querySelector("#boss-lightbox-image");

    function openBossLightbox(trigger) {
        if (!bossLightbox || !bossLightboxImage) return;

        const sourceImage = trigger.querySelector(".boss-sprite");
        if (!sourceImage) return;

        bossLightboxImage.src = sourceImage.src;
        bossLightboxImage.alt = sourceImage.alt;
        bossLightbox.classList.add("open");
        bossLightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
    }

    function closeBossLightbox() {
        if (!bossLightbox || !bossLightboxImage) return;

        bossLightbox.classList.remove("open");
        bossLightbox.setAttribute("aria-hidden", "true");
        bossLightboxImage.src = "";
        bossLightboxImage.alt = "";
        document.body.classList.remove("lightbox-open");
    }

    document.querySelectorAll(".boss-view-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            openBossLightbox(trigger);
        });

        trigger.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openBossLightbox(trigger);
            }
        });
    });

    if (bossLightbox) {
        bossLightbox.addEventListener("click", closeBossLightbox);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && bossLightbox?.classList.contains("open")) {
            closeBossLightbox();
        }
    });

    const tileLightbox = document.querySelector("#tile-lightbox");
    const tileLightboxImage = document.querySelector("#tile-lightbox-image");

    function openTileLightbox(item) {
        if (!tileLightbox || !tileLightboxImage) return;

        const sourceImage = item.querySelector("img");
        if (!sourceImage) return;

        tileLightboxImage.src = sourceImage.src;
        tileLightboxImage.alt = sourceImage.alt;
        tileLightbox.classList.add("open");
        tileLightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
    }

    function closeTileLightbox() {
        if (!tileLightbox || !tileLightboxImage) return;

        tileLightbox.classList.remove("open");
        tileLightbox.setAttribute("aria-hidden", "true");
        tileLightboxImage.src = "";
        tileLightboxImage.alt = "";
        document.body.classList.remove("lightbox-open");
    }

    document.querySelectorAll(".tile-gallery-item").forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            openTileLightbox(item);
        });
    });

    if (tileLightbox) {
        tileLightbox.addEventListener("click", closeTileLightbox);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && tileLightbox?.classList.contains("open")) {
            closeTileLightbox();
        }
    });

    const discordModal = document.querySelector("#discord-contact-modal");
    const discordCloseButton = document.querySelector(".discord-modal-close");

    function openDiscordModal() {
        if (!discordModal) return;
        discordModal.classList.add("open");
        discordModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
        discordCloseButton?.focus();
    }

    function closeDiscordModal() {
        if (!discordModal) return;
        discordModal.classList.remove("open");
        discordModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("lightbox-open");
    }

    document.querySelectorAll(".discord-contact-button").forEach((button) => {
        button.addEventListener("click", openDiscordModal);
    });

    discordCloseButton?.addEventListener("click", closeDiscordModal);

    discordModal?.addEventListener("click", (event) => {
        if (event.target === discordModal) closeDiscordModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && discordModal?.classList.contains("open")) {
            closeDiscordModal();
        }
    });

    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
})();
