window.MathJax = {
    tex: {
        displayMath: [["\\[", "\\]"]],
        processRefs: false,
        processEnvironments: false,
        packages: {
            "[+]": ["noerrors", "mhchem"],
        },
    },
    startup: {
        typeset: false,
        pageReady: () => {
            console.log("page is ready");
            return MathJax.startup.defaultPageReady();
        },
    },
    options: {
        renderActions: {
            addMenu: [],
            checkLoading: [],
        },
        ignoreHtmlClass: "tex2jax_ignore",
        processHtmlClass: "tex2jax_process",
    },
    loader: {
        load: ["[tex]/noerrors", "[tex]/mhchem"],
    },
};
