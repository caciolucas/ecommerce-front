import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function LoginPage() {
    const styles = {
        loginCard: {
            minHeight: '100vh',
            height: '100vh'
        }
    }
    return (
        <div className="flex align-items-center justify-content-center" style={styles.loginCard}>
            <div className="surface-card p-4 shadow-8 border-round w-full lg:w-3">
                <div>
                    <img src="https://i.pinimg.com/originals/ab/ca/4c/abca4c51c7e166b2980105b5e98b7ac2.jpg" alt="Logo" className="w-full mx-auto"/>
                    <h1 className="text-center">Sistema de Vendas</h1>
                    <h2 className="text-center">Login</h2>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Usuário</label>
                    <InputText id="email" type="text" className="w-full mb-3" />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Senha</label>
                    <InputText id="password" type="password" className="w-full mb-4" />

                    <Button label="Entrar" icon="pi pi-sign-in" className="w-full mb-2"  />
                    <Button label="Cadastrar" icon="pi pi-user-plus" className="w-full p-button-outlined" />
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
