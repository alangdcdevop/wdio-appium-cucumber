

const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('//android.widget.Button[@content-desc="visibleButtonTestCD"]');
    }


    async login (username, password) {
        // await this.inputUsername.setValue(username);
        // await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
