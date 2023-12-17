import React from 'react'
import { Container } from 'react-bootstrap'

export const Footer = () => {
    return (
        <>
            <footer className='py-5 bg-dark text-white text-center'>
                <Container>
                    <p className='m-0'>Developed By Bryan Filamor. <a className='text-white' href='https://github.com/bfilamor/custom-calendar'>Source Code </a></p>
                </Container>
            </footer>
        </>
    )
}
