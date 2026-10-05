/* =====================================================
   AUTH CONTAINER
===================================================== */

const authContainer =
    document.getElementById("authContainer");


const showSignUp =
    document.getElementById("showSignUp");


const showSignIn =
    document.getElementById("showSignIn");



/* =====================================================
   SIGN UP
===================================================== */

showSignUp.addEventListener("click", () => {

    authContainer.classList.add(
        "sign-up-active"
    );

});



/* =====================================================
   SIGN IN
===================================================== */

showSignIn.addEventListener("click", () => {

    authContainer.classList.remove(
        "sign-up-active"
    );

});



/* =====================================================
   PASSWORD SHOW / HIDE
===================================================== */

const passwordButtons =
    document.querySelectorAll(
        ".password-toggle"
    );


passwordButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.target;

        const input =
            document.getElementById(target);


        if (input.type === "password") {

            input.type = "text";

        } else {

            input.type = "password";

        }

    });

});



/* =====================================================
   LOGIN FORM
===================================================== */

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim();


        const password =
            document
                .getElementById("loginPassword")
                .value;


        if (!email || !password) {

            return;

        }


        console.log(
            "LOGIN",
            {
                email,
                password
            }
        );


        /*
            Firebase / Backend Login
            ကို ဒီနေရာမှာ ထည့်နိုင်ပါတယ်။
        */

    }
);



/* =====================================================
   SIGN UP FORM
===================================================== */

const signupForm =
    document.getElementById("signupForm");


signupForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("signupName")
                .value
                .trim();


        const email =
            document
                .getElementById("signupEmail")
                .value
                .trim();


        const password =
            document
                .getElementById("signupPassword")
                .value;


        const confirmPassword =
            document
                .getElementById("confirmPassword")
                .value;


        const terms =
            document
                .getElementById("terms")
                .checked;



        /* ===============================
           VALIDATION
        =============================== */

        if (
            !name ||
            !email ||
            !password ||
            !confirmPassword
        ) {

            alert(
                "Please fill in all fields."
            );

            return;
        }



        if (password.length < 6) {

            alert(
                "Password must be at least 6 characters."
            );

            return;
        }



        if (
            password !==
            confirmPassword
        ) {

            alert(
                "Passwords do not match."
            );

            return;
        }



        if (!terms) {

            alert(
                "Please accept the Terms & Conditions."
            );

            return;
        }



        /* ===============================
           SUCCESS
        =============================== */

        console.log(
            "SIGN UP",
            {
                name,
                email,
                password
            }
        );


        /*
            Firebase / Backend Registration
            ကို ဒီနေရာမှာ ထည့်နိုင်ပါတယ်။
        */

    }
);