import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
    Providers.GitHub({
        clientId: "f1ea7f2d05e711c8e0eb",
        clientSecret: "6913698d52a004d645c6d47e10a549366c23f7b8"
    })
]

const callbacks = {}

callbacks.signIn = async function signIn(user, account, metadata) {
    const emailRes = await fetch('https://api.github.com/user/emails', {
        headers: {
            'Authorization': `token ${account.accessToken}`
        }
    })
    const emails = await emailRes.json()
    const primaryEmail = emails.find(e => e.primary).email;

    user.email = primaryEmail;
}

const options = {
    providers,
    callbacks
}

export default (req, res) => NextAuth(req, res, options)