export interface LoginAdminProps {
  email: string;
  senha: string;
}

export class LoginAdmin {
    private props: LoginAdminProps;

    get loginAdmin() {
      return this.props;
    }
    get email() {
        return this.props.email;
    }

    get senha() {
        return this.props.senha;
    }

    constructor(props: LoginAdminProps) {
      const {email, senha} = props;
      this.props = props;
  }
}