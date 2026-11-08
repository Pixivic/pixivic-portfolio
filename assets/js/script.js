(function () {
    const menuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "✕" : "☰";
            menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-label", "Open navigation");
            });
        });
    }

    const bossLightbox = document.querySelector("#boss-lightbox");
    const bossLightboxImage = document.querySelector("#boss-lightbox-image");
    let bossTrigger = null;

    function openBossLightbox(trigger) {
        if (!bossLightbox || !bossLightboxImage) return;

        const sourceImage = trigger.querySelector(".boss-sprite");
        if (!sourceImage) return;

        bossTrigger = trigger;
        bossLightboxImage.src = sourceImage.src;
        bossLightboxImage.alt = sourceImage.alt;
        bossLightbox.classList.add("open");
        bossLightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
        bossLightbox.tabIndex = -1;
        bossLightbox.focus();
    }

    function closeBossLightbox() {
        if (!bossLightbox || !bossLightboxImage) return;

        bossLightbox.classList.remove("open");
        bossLightbox.setAttribute("aria-hidden", "true");
        bossLightboxImage.src = "";
        bossLightboxImage.alt = "";
        document.body.classList.remove("lightbox-open");
        bossTrigger?.focus();
        bossTrigger = null;
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

    const tileLightbox = document.querySelector("#tile-lightbox");
    const tileLightboxImage = document.querySelector("#tile-lightbox-image");
    let tileTrigger = null;

    function openTileLightbox(item) {
        if (!tileLightbox || !tileLightboxImage) return;

        const sourceImage = item.querySelector("img");
        if (!sourceImage) return;

        tileTrigger = item;
        tileLightboxImage.src = sourceImage.src;
        tileLightboxImage.alt = sourceImage.alt;
        tileLightbox.classList.add("open");
        tileLightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
        tileLightbox.tabIndex = -1;
        tileLightbox.focus();
    }

    function closeTileLightbox() {
        if (!tileLightbox || !tileLightboxImage) return;

        tileLightbox.classList.remove("open");
        tileLightbox.setAttribute("aria-hidden", "true");
        tileLightboxImage.src = "";
        tileLightboxImage.alt = "";
        document.body.classList.remove("lightbox-open");
        tileTrigger?.focus();
        tileTrigger = null;
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

    const discordModal = document.querySelector("#discord-contact-modal");
    const discordCloseButton = document.querySelector(".discord-modal-close");
    let discordTrigger = null;

    function openDiscordModal() {
        if (!discordModal) return;
        discordTrigger = document.activeElement;
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
        discordTrigger?.focus();
        discordTrigger = null;
    }

    document.querySelectorAll(".discord-contact-button").forEach((button) => {
        button.addEventListener("click", openDiscordModal);
    });

    discordCloseButton?.addEventListener("click", closeDiscordModal);

    discordModal?.addEventListener("click", (event) => {
        if (event.target === discordModal) closeDiscordModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (bossLightbox?.classList.contains("open")) closeBossLightbox();
        else if (tileLightbox?.classList.contains("open")) closeTileLightbox();
        else if (discordModal?.classList.contains("open")) closeDiscordModal();
    });

    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
})();
