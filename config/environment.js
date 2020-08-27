

const development = {
    name: "development",
    assest_path: "./assets",
    session_cookie_key: "blahsomething",
    db: "codeial_development",
    smtp: {
        service: "gmail",
        host: "smtp.gmail.com", 
        port: 587,
        secure: false,
        auth: {
            user: "abc@gmail.com",
            pass: "xyz" 
        },
        tls: {
            rejectUnauthorized: false
          }
    },

    google_client_id: "411177092996-dc28o7t4md9sj62vg40latr5n767s7hh.apps.googleusercontent.com",
    google_client_secret: "PB3XMLObi1_X27hCPi7FNBOt",
    google_callback_url: "http://localhost:8000/users/auth/google/callback"
}

const producction = {
    name: "production"
}

module.exports = development;