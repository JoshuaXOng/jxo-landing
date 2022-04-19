import React from "react";
import "./login-page.css";
import gunthersImg from "../../../assets/gunthers.png";
import SubmissionCard from "../../components/submission_card/submission_card";
import Button from "../../components/button/button";

function LoginPage () {
	return (
		<div className='login-page'>
			<div className='login-page__authentication-panel'>
				<div className='login-page__authentication-panel__login-card-container'>
					<SubmissionCard
						title='Login'
						info='Um... login?'
						controls={
							<div className='login-page__authentication-panel__login-card-container__controls'>
								<input type='email' placeholder='Email'></input>
								<input type='password' placeholder='Password'></input>
								<Button>Login</Button>
							</div>
						}
					>
					</SubmissionCard>
				</div>
				<div className='login-page__authentication-panel__register-card-container'>
					<SubmissionCard
						image={<img
							style={{ zIndex: 0, width: "100%", transform: "translate(0rem, -2rem)" }}
							src={gunthersImg}>
						</img>}
						title='Register'
						info='Signup for an account...'
						controls={
							<div className='login-page__authentication-panel__register-card-container__controls'>
								<input type='email' placeholder='Email'></input>
								<input type='password' placeholder='Password'></input>
								<Button>Signup</Button>
							</div>
						}
					>
					</SubmissionCard>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
