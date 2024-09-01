export { default } from 'next-auth/middleware'

export const config = {
    matcher: [ '/donars','/main']
    // matcher:['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}