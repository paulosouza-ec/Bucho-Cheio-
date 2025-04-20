
export interface LoginClienteProps {
    email: string;
    senha: string;
}

export class LoginCliente {
    private props: LoginClienteProps;

    get email() {
        return this.props.email;
    }
    get senha() {
        return this.props.senha;
    }

    constructor(props: LoginClienteProps) {
        const { email, senha } = props;

        this.props = props;
    }

}




