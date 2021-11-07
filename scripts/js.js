var js_email;
				var js_senha;

				function login(){
					js_email= prompt("E-mail")
					js_senha= prompt("Senha")

					switch (parseInt(js_senha)) {

						case 1234 : window.alert("Login Aprovado"); break;
						case 4321 : window.alert('Login Aprovado'); break;
						case 54321 : window.alert("Login aprovado"); break;
						default : window.alert("Senha Incorreta!"); break;
					}
				}
