module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,scss, html}",
    ],
    theme: {
        extend: {
            animation: { /* syntaxe => 'animate-btn' */
                /* component button */
                'btn-logo': 'spin ease-in-out 1.2s infinite',
                /* component barecode-scanner */
                'bcdscan-logo': 'spin ease-in-out 1.2s infinite',
                /* component loading (associé à keyframe -> turn ) */
                'loading-logo': '2.5s linear infinite turn',
            },
            borderRadius: { /* syntaxe => 'rounded-btn' */
                //---------------------------------------------//
                /* component button */
                'btn': '.75rem',
                /* component button-back */
                'btnback': '.5rem',
                /* component input-text */
                'inptxt': '.5rem',
                /* component input-textarea */
                'txtarea': '.5rem',
                /* component input-combo */
                'inpcomb': '.5rem',
                /* component card-location */
                'cardloc': '.25rem',
                /* component card-location-details */
                'cardlocdetails': '.25rem',
                /* component card-product-list */
                'cardprodlist': '.25rem',
                /* component header */
                'head-icon-pwr': '.5rem',
                'head-icon-left': '.5rem',
                /* component footer */
                'foot-icon-set': '.5rem',
                /* component modal */
                'modal-container': '.25rem',
                'modal-header-t': '.25rem',
                /* component routing-button-card -RBC- */
                'RBC-simplebtn': '.75rem',
                'RBC-cardetails': '.75rem',
                /* component table/table-simple */
                'tab-table': '0.375rem',
                /* component barecode-scanner */
                'bcdscan-cam': '.375rem',
                /* component loading */
                'loading-logo': '50%',
            },
            borderWidth: { /* syntaxe => 'border-btn' */
                DEFAULT: '2px',
                //---------------------------------------------//
                /* component button */
                'btn': '2px',
                /* component button-back */
                'btnback': '2px',
                /* component input-text */
                'inptxt': '2px',
                /* component input-textarea */
                'txtarea-input-brd': '2px',
                /* component input-combo */
                'inpcomb': '2px',
                /* component card-location */
                'cardloc': '2px',
                /* component card-location-details */
                'cardlocdetails': '2px',
                /* component card-product-list */
                'cardprodlist': '2px',
                /* component header */
                'head-icon-pwr': '2px',
                'head-icon-left': '2px',
                /* component footer */
                'foot-icon-set': '2px',
                /* component modal */
                'modal': '2px',
                'modal-footer-t': '2px',
                /* component routing-button-card -RBC- */
                'RBC-simplebtn': '2px',
                'RBC-cardetails': '2px',
                /* component table/table-simple */
                'tab-th-brd-l': '1px',
                'tab-tr-brd-t': '1px',
                'tab-td-brd-l': '1px',
                'tab-th-first-brd': '0px',
                'tab-tr-first-brd': '0px',
                'tab-td-first-brd': '0px',
                /* component barecode-scanner */
                'bcdscan-cam': '4px',
            },
            boxShadow: { /* syntaxe => 'shadow-btn' */
                /* component button */
                'btn': '0.1em 0.1em 0.2em 0.1em rgba(0,0,0,0.3)',
                /* component button-back */
                'btnback': '0.1em 0.1em 0.2em 0.1em rgba(0,0,0,0.3)',
                /* component footer */
                'foot-icon-set': '0.1em 0.1em 0.2em rgba(0,0,0,0.3)',
                /* component header */
                'head-icon-pwr': '0.1em 0.1em 0.2em rgba(0,0,0,0.3)',
                'head-icon-left': '0.1em 0.1em 0.2em rgba(0,0,0,0.3)',
                /* component routing-button-card -RBC- */
                'RBC-simplebtn': '0.1em 0.1em 0.2em 0.1em rgba(0,0,0,0.3)',
                'RBC-cardetails': '0.1em 0.1em 0.2em 0.1em rgba(0,0,0,0.3)',
            },
            colors: { /* syntaxe => 'xxx-color-btn' */
                'color-primary': '#7FC31C'/* green */,
                'color-secondary': '#28509e'/* blue */,
                'color-tertiary': '#dc2626'/* red */,
                'color-quaternary': '#FFFFFF'/* white */,
                'color-quinary': '#F3F3F6'/* dirt-white */,
                'color-senary': '#E8E9EB'/* light-gray */,
                'color-septenary': '#D1D5DB'/* gray */,
                'color-octonary': '#444051'/* dark-gray */,
                'color-nonary': '#9ca3af'/* variant-gray */,
                //---------------------------------------------//
                /* component barecode-scanner */
                'color-bcdscan-container-bg': '#444051'/* dark-gray */,
                'color-bcdscan-cam-brd': '#FFFFFF'/* white */,
                'color-bcdscan-icon-txt': '#E8E9EB'/* light-gray */,
                'color-bcdscan-content-bg': '#444051'/* dark-gray */,
                /* component basic/button */
                'color-btn-bg-primary': '#7FC31C'/* green */,
                'color-btn-bg-secondary': '#28509e'/* blue */,
                'color-btn-txt': '#FFFFFF'/* white */,
                'color-btn-logo': '#E8E9EB'/* light-gray */,
                'color-btn-brd': '#FFFFFF'/* white */,
                /* component button-back */
                'color-btnback-bg': '#28509e'/* blue */,
                'color-btnback-txt': '#FFFFFF'/* white */,
                'color-btnback-brd': '#FFFFFF'/* white */,
                'color-btnback-icon': '#FFFFFF'/* white */,
                /* component input-text */
                'color-inptxt-bg': '#FFFFFF'/* white */,
                'color-inptxt-brd': '#D1D5DB'/* gray */,
                'color-inptxt-lbl': '#444051'/* dark-gray */,
                'color-inptxt-txt': '#444051'/* dark-gray */,
                'color-inptxt-errtxt': '#dc2626'/* red */,
                'color-inptxt-brd-foc': '#28509e'/* blue */,
                'color-inptxt-lbl-foc': '#28509e'/* blue */,
                'color-inptxt-lbl-bg': '#FFFFFF'/* white */,
                'color-inptxt-pwd': '#444051'/* dark-gray */,
                'color-inptxt-check': '#7FC31C'/* green */,
                'color-inptxt-scan': '#28509e'/* blue */,
                'color-inptxt-pwd-scan': '#444051'/* dark-gray */,
                'color-inptxt-check-scan': '#7FC31C'/* green */,
                /* component input-textarea */
                'color-txtarea-lbl-bg': '#FFFFFF'/* white */,
                'color-txtarea-brd': '#D1D5DB'/* gray */,
                'color-txtarea-brd-foc': '#28509e'/* blue */,
                'color-txtarea-brd-foc-with': '#28509e'/* blue */,
                'color-txtarea-foc-with-lbl': '#28509e'/* blue */,
                /* component checkbox */
                'color-chbox-accent': '#28509e'/* blue */,
                'color-chbox-txt': '#444051'/* dark-gray */,
                'color-chbox-errtxt': '#dc2626'/* red */,
                /* component input-combo */
                'color-inpcomb-text-foc': '#28509e'/* blue */,
                'color-inpcomb-bg': '#FFFFFF'/* white */,
                'color-inpcomb-brd-foc': '#28509e'/* blue */,
                'color-inpcomb-brd': '#D1D5DB'/* gray */,
                'color-inpcomb-errtxt': '#dc2626'/* red */,
                /* component card-location */
                'color-cardloc-bg': '#F3F3F6'/* dirt-white */,
                'color-cardloc-brd': '#D1D5DB'/* gray */,
                /* component card-location-details */
                'color-cardlocdetails-bg': '#F3F3F6'/* dirt-white */,
                'color-cardlocdetails-brd': '#D1D5DB'/* gray */,
                /* component card-product-list */
                'color-cardprodlist-txt': '#7FC31C'/* green */,
                'color-cardprodlist-bg': '#F3F3F6'/* dirt-white */,
                'color-cardprodlist-brd': '#D1D5DB'/* gray */,
                /* component footer */
                'color-foot-txt': '#28509e'/* blue */,
                'color-foot-by': '#9ca3af'/* variant-gray */,
                'color-foot-icon-set-bg': '#28509e'/* blue */,
                'color-foot-icon-set-txt': '#FFFFFF'/* white */,
                /* component form-location */
                'color-formloc-errtxt': '#dc2626'/* red */,
                /* component form-product-and-quantity */
                'color-formprodqua-errtxt': '#dc2626'/* red */,
                /* component form-server-config */
                'color-formservconf-succtxt': '#7FC31C'/* green */,
                'color-formservconf-errtxt': '#dc2626'/* red */,
                /* component header */
                'color-head-user': '#28509e'/* blue */,
                'color-head-icon-pwr-brd': '#FFFFFF'/* white */,
                'color-head-icon-left-brd': '#FFFFFF'/* white */,
                'color-head-icon-pwr-txt': '#FFFFFF'/* white */,
                'color-head-icon-left-txt': '#FFFFFF'/* white */,
                'color-head-icon-pwr-bg': '#dc2626'/* red */,
                'color-head-icon-left-bg': '#28509e'/* blue */,
                'color-head-icon-user-txt': '#28509e'/* blue */,
                'color-head-icon-wifioff-txt': '#dc2626'/* red */,
                'color-head-icon-wifion-txt': '#7FC31C'/* green */,
                /* component loading */
                'color-loading-bg': '#FFFFFF'/* white */,
                /* component modal */
                'color-modal-backdrop-bg': '#111827'/* x-dark-gray */,
                'color-modal-container-bg': '#D1D5DB'/* gray */,
                'color-modal-header-bg': '#7FC31C'/* green */,
                'color-modal-header-txt': '#FFFFFF'/* white */,
                'color-modal-footer-brd-t': '#444051'/* dark-gray */,
                /* component routing-button-card -RBC- */
                'color-RBC-simplebtn-txt': '#FFFFFF'/* white */,
                'color-RBC-simplebtn-bg': '#7FC31C'/* green */,
                'color-RBC-cardetails-bg': '#F3F3F6'/* dirt-white */,
                'color-RBC-cardetails-brd': '#F3F3F6'/* dirt-white */,
                /* component single-input */
                'color-singinp-errtxt': '#dc2626'/* red */,
                /* component table/table-simple */
                'color-tab-thead-bg': '#28509e'/* blue */,
                'color-tab-th-txt': '#FFFFFF'/* white */,
                'color-tab-tr-brd': '#D1D5DB'/* gray */,
                'color-tab-td-brd': '#D1D5DB'/* gray */,
                'color-tab-tr-bg': '#F3F3F6'/* dirt-white */,
                'color-tab-td-txt': '#28509e'/* blue */,
                'color-tab-td-quant-bg': '#FFFFFF'/* white */,
                'color-tab-td-last-bg': '#FFFFFF'/* white */,
                'color-tab-icon-del-txt': '#dc2626'/* red */,
                'color-tab-icon-del-bg': '#FFFFFF'/* white */,
            },
            fontFamily: { /* syntaxe => 'font-btn' */
                'sans': ['Unbuntu', 'sans-serif']
            },
            fontSize: { /* syntaxe => text-btn */
                //---------------------------------------------//
                'x-small': ['.875rem', 0.8],
                'small': ['1rem', 1],
                'medium': ['1.4rem', 1],
                'large': ['1.8rem', 1],
                'x-large': ['2rem', 1],
                '2x-large': ['3rem', 1],
                /* component input-text */
                'inptxt': '1.125rem',
                'inptxt-pwd': '2.25rem',
                'inptxt-scan': '2.25rem',
                'inptxt-check': '2.25rem',
                'inptxt-pwd-scan': '2.25rem',
                'inptxt-check-scan': '2.25rem',
                'inptxt-errtxt': '.875rem',
                'inptxt-unit': '1.2rem',
                /* component input-combo */
                'inpcomb-errtxt': '.875rem',
                /* component button-back */
                'btnback-icon': '1.6rem',
                /* component basic/button (si taille logo, changer le spacing aussi) */
                'btn-load': ['2rem', 1],
                /* component checkbox */
                'chbox-txt': ['1.125rem', 1],
                'chbox-errtxt': '.875rem',
                /* component card-product-list */
                'cardprodlist-name': ['1.4rem', 1],
                /* component form-location */
                'formloc-errtxt': '.875rem',
                /* component form-product-and-quantity */
                'formprodqua-title': '1.8rem',
                'formprodqua-errtxt': '.875rem',
                /* component form-server-config */
                'formservconf-errtxt': '.875rem',
                'formservconf-succtxt': '.875rem',
                /* component single-input */
                'singinp-errtxt': '.875rem',
                /* component footer */
                'foot-txt': '1rem',
                'foot-by': '1rem',
                'foot-icon-set': '2.2rem',
                /* component header */
                'head-user': '1.4rem',
                'head-icon-pwr-txt': '2.2rem',
                'head-icon-left-txt': '2.2rem',
                'head-icon-user-txt': '2rem',
                'head-icon-wifioff-txt': '2rem',
                'head-icon-wifion-txt': '2rem',
                /* component modal */
                'modal-header-txt': '1.25rem',
                /* component routing-button-card -RBC- */
                'RBC-container': ['1.4rem', 1],
                'RBC-description': ['0.7rem', 0.8],
                /* component table/table-simple */
                'tab-th-txt': ['.875rem', 0.8],
                'tab-td-txt': ['.875rem', 0.8],
                'tab-icon-txt': '1.5rem',
                /* component barecode-scanner */
                "bcdscan-icon": '2rem'
            },
            fontWeight: { /* syntaxe => "font-btn" */
                //---------------------------------------------//
                /* component input-text */
                'inptxt-errtxt': 700,
                'inptxt-unit': 700,
                /* component basic/button */
                'btn-txt': 600,
                /* component input-combo */
                'inpcomb-errtxt': '700',
                /* component button-back */
                'btnback-txt': 700,
                /* component checkbox */
                'chbox-txt': 'none',
                'chbox-errtxt': 700,
                /* component card-location */
                'cardloc-element-txt': 700,
                /* component card-location-details */
                'cardlocdetails-element-txt': 700,
                /* component card-product-list */
                'cardprodlist-element-description': 700,
                'cardprodlist-element-quantity': 700,
                /* component form-location */
                'formloc-errtxt': 700,
                /* component form-product-and-quantity */
                'formprodqua-title': 0,
                'formprodqua-errtxt': 700,
                /* component form-server-config */
                'formservconf-errtxt': 700,
                /* component single-input */
                'singinp-errtxt': 700,
                /* component header */
                'head-user': 700,
                /* component table/table-simple */
                'tab-th': 700,
                'tab-td': 500,
            },
            gap: { /* syntaxe => 'gap-btn' */
                /* component basic/button */
                'btn-mix': '.5rem',
                /* component input-text */
                'inptxt-container': '.25rem',
                /* component card-location */
                'cardloc-card': '1rem',
                'cardloc-list': '1rem',
                /* component checkbox */
                'chbox-lbl': '.5rem',
                /* component card-product-list */
                'cardprodlist': '.5rem',
                /* component form-location */
                'formloc': '1rem',
                /* component form-product-and-quantity */
                'formprodqua-container': '.25rem',
                'formprodqua-form': '1rem',
                'formprodqua-item': '.25rem',
                /* component form-server-config */
                'formservconf-form': '1rem',
                'formservconf-btns': '.5rem',
                /* component single-input */
                'singinp-form': "1rem",
                /* component modal */
                'modal-footer': '1rem',
                /* component routing-button-card -RBC- */
                'RBC-cardetails': '.75rem',
                'RBC-container': '.5rem',
                /* component barecode-scanner */
                'bcdscan': '.5rem',
            },
            height: { /* syntaxe => 'h-btn' */
                /* component checkbox */
                'chbox': '1.25rem',
                /* component basic/button */
                'btn-icon': '2.5rem',
                /* component barecode-scanner */
                'bcdscan-container': '100vh'
            },
            inset: { /* syntaxe => 'inset-btn' */
                /* component modal */
                'modal-backdrop': 0,
                /* component barecode-scanner */
                'bcdscan': 0,
            },
            keyframes: {
                /* component loading */
                turn: {
                  'from': { transform: 'rotateY(0deg)' },
                  'to': { transform: 'rotateY(360deg)' },
                },
            },
            margin: { /* syntaxe => 'm-btn' */
                'x-small': '0.5rem',
                'small': '2rem',
                'medium': '2.5rem',
                'large': '5rem',
                /* component input-text */
                'inptxt-unit-r': '1rem',
                /* component input-combo */
                'inpcomb-errtxt-mt': '.25rem',
                /* component card-location-details */
                'cardlocdetails-element-ml': '.5rem',
                /* component card-product-list */
                'cardprodlist-element-quantity-r': '2rem',
                /* component modal */
                'modal-container-mx': 'auto',
                /* component barecode-scanner */
                'bcdscan-content-mx': '0rem',
            },
            maxHeight: { /* syntaxe => 'max-h-btn' */
                /* component modal */
                'modal-body': '12rem',
            },
            maxWidth: { /* syntaxe => 'max-w-btn' */
                /* component modal */
                'modal-container': '28rem',
            },
            opacity: { /* syntaxe => 'opacity-btn' */
                /* component button */
                'btn-primary': '.40',
                'btn-secondary': '.40',
                'btn-active': '.4',
                /* component button-back */
                'btnback-active': '.4',
                /* component modal */
                'modal-backdrop-bg': '0.8',
                /* component barecode-scanner */
                'bcdscan': '0.8',
                /* component loading */
                'loading-logo': '0.6',
            },
            padding: { /* syntaxe => 'p-btn' */
                'x-small': '0.5rem',
                'small': '1rem',
                'medium': '3rem',
                'large': '5rem',
                /* component basic/button */
                'btn-py': '1rem',
                'btn-px': '1rem',
                'btn-icon-py': '.5rem',
                /* component button-back */
                'btnback-pr': '1rem',
                /* component input-text (si changement, changer le spacing aussi) */
                'inptxt-field-p': '1rem',
                'inptxt-lbl-p': '1rem',
                /* component input-textarea */
                'txtarea-input-p': '1rem',
                'txtarea-lbl-px': '.5rem',
                'txtarea-lbl-py': '0rem',
                /* component card-location */
                'cardloc-px': '0rem',
                'cardloc-pt': '1rem',
                'cardloc-pb': '.5rem',
                /* component card-location-details */
                'cardlocdetails-p': '.5rem',
                /* component card-product-list */
                'cardprodlist-p': '1rem',
                /* component modal */
                'modal-backdrop-px': '1rem',
                'modal-header-px': '1rem',
                'modal-header-py': '.5rem',
                'modal-body': '1rem',
                'modal-footer-px': '1rem',
                'modal-footer-py': '.5rem',
                /* component routing-button-card RBC */
                'RBC-simplebtn-p': '.75rem',
                'RBC-cardetails-px': '.5rem',
                'RBC-cardetails-py': '.75rem',
                /* component footer */
                'foot-icon-set-p': 'none',
                /* component header */
                'head-icon-pwr-p': 'none',
                'head-icon-left-p': 'none',
                /* component table/table-simple */
                'tab-th-py': '1rem',
                'tab-td-py': '.5rem',
                'tab-td-px': '0.25rem',
            },
            spacing: { /* syntaxe => "top-btn" */
                /* component basic/button */
                'btn-load-t': '1rem',
                'btn-load-l': "1rem",
                /* component input-text */
                'inptxt-lbl-t': "0rem",
                'inptxt-pwd-r': '.5rem',
                'inptxt-pwd-t': ".75rem",
                'inptxt-scan-r': '.5rem',
                'inptxt-scan-t': ".75rem",
                'inptxt-check-r': '.5rem',
                'inptxt-check-t': ".75rem",
                'inptxt-pwd-scan-r': '3.25rem',
                'inptxt-pwd-scan-t': ".75rem",
                'inptxt-check-scan-r': '3.25rem',
                'inptxt-check-scan-t': ".75rem",
                /* component input-textarea */
                'txtarea-lbl-t': '.75rem',
                'txtarea-lbl-l': '1rem',
                /* component input-combo */
                'inpcomb-l': '0rem',
                'inpcomb-t': '-0.75rem',
                /* component card-product-list */
                'cardprodlist-delete-single-t': '.25rem',
                'cardprodlist-delete-single-r': '.25rem',
                'cardprodlist-delete-list-t': '.25rem',
                'cardprodlist-delete-list-r': '.25rem',
                /* component modal */
                'modal-container-t': '10rem',
                /* component barecode-scanner */
                'bcdscan-icon-t': 'calc(50% - 2rem)',
                'bcdscan-icon-l': 'calc(50% - 2rem)',
                /* component loading */
                'loading-t': '',
                'loading-r': '.25rem',
                'loading-b': '.25rem',
                'loading-l': ''
            },
            transformOrigin: {
                "0": "0%",
            },
            transitionDuration: { /* syntaxe => 'rounded-btn' */
                //-----------------------------------------------------//
                /* component input-text */
                'inptxt-lbl': '.3s',
            },
            width: { /* syntaxe => 'w-btn' */
                /* component checkbox */
                'chbox': '1.25rem',
                /* component card-location */
                'cardloc-btn': '50%',
                /* component barecode-scanner */
                'bcdscan-cancel-btn': '50%',
                /* component table/table-simple */
                'tab-container': '100%',
                'tab-input': '100%',
                /* component loading */
                'loading-logo': '4rem',
            },
            zIndex: { /* syntaxe => 'z-btn' */
                "-1": "-1",
                "-2": "-2",
                /* component input-text */
                'inptxt-container': 0,
                'inptxt-field': -10,
                'inptxt-lbl': -20,
                /* component modal */
                'modal-backdrop': 50,
                /* component barecode-scanner */
                'bcdscan-container': 40,
                'bcdscan-cam': 50,
                'bcdscan-icon': 40,
                /* component loading */
                'loading': 50
            },
        },
    },
    plugins: [],
}