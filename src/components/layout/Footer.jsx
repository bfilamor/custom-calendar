import React from 'react'
import { Container } from 'react-bootstrap'

export const Footer = () => {
    return (
        <>
            <footer className='py-5 bg-dark text-white text-center'>
                <Container>
                    <p className='m-0'>Developed By Bryan Filamor. <a href='https://github.com/bfilamor/custom-calendar' target='_blank'>Source Code </a></p>
                </Container>
            </footer>
        </>
    )
}
