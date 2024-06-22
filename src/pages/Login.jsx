import { useState } from 'react';
import { TopBar } from '../components/TopBar'
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import '../App.css'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('email:', email)
        console.log('password', password)
    }

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    return (
        <>
            <TopBar />
            <form className='formLogin'>
                <section className='titleLoginSection'>
                    <p className='titleLogin'>
                        <IoPersonOutline className='icon' />
                        login do cliente
                    </p>
                    <p className='subTitleLogin'>Veja seus pedidos de forma fácil, compre mais rápido e tenha uma experiência personalizada :)</p>
                </section>
                <section className='inputSection'>
                    <label htmlFor="email"><span>*</span> e-mail</label>
                    <input type="email"
                        name="email"
                        className='input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <span className='error' hidden>email inválido</span>
                </section>
                <br />
                <section className='inputSection'>
                    <label htmlFor="password"><span>*</span> senha</label>
                    <input type="password" id="password"
                        name="password" className='input'
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        required />
                    <span className='error'
                        hidden
                    >senha inválida</span>
                </section>
                <br />
                <button type="submit" className='loginButton' onSubmit={handleSubmit} >continuar</button>

                <section className='sectionCadastro'>
                    <p className='subTitleLogin'>
                        Não tem Cadastro?
                        <Link to='/register' className='links'> cadastre-se</Link>
                    </p>
                    <p className='subTitleLogin'>Ao continuar com o acesso, você concorda com a nossa
                        <a href='https://www.americanas.com.br/hotsite/politica-de-privacidade' className='links'> política de privacidade</a>
                    </p>
                </section>
            </form>
        </>
    )
}