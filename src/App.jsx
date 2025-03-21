import { useState } from "react";
import "./App.css";

function App() {
	const letters = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [specializzazione, setSpecializzazione] = useState("");
	const [anni, setAnni] = useState("");
	const [descrizione, setDescrizione] = useState("");

	const isUsernameValid =
		username.length >= 6 && /^[a-zA-Z0-9]+$/.test(username);
	const isPasswordValid =
		password.length >= 8 && /^[a-zA-Z0-9]+$/.test(password);
	const isDescrizioneValid =
		descrizione.trim().length >= 100 && descrizione.trim().length <= 1000;
	const handleChange = (e) => {
		const option = e.target.value;
		setSpecializzazione(option);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (anni < 0) {
			alert("Inserisci un valore positivo");
			return;
		}

		console.log("Valori inseriti:", {
			nome: name,
			username: username,
			password: password,
			specializzazione: specializzazione,
			anni: anni,
			breve_descrizione: descrizione,
		});
	};

	return (
		<div className="container">
			<h1>Form di registrazione</h1>
			<form onSubmit={handleSubmit}>
				<div className="input">
					<label htmlFor="nome">Nome: </label>
					<input
						required
						type="text"
						id="nome"
						value={name}
						placeholder="Inserisci il tuo nome"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="input">
					<label htmlFor="username">Username: </label>
					<input
						required
						type="text"
						id="username"
						value={username}
						placeholder="Inserisci il tuo username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					{username && (
						<p style={{ color: isUsernameValid ? "green" : "red" }}>
							{isUsernameValid
								? "Username valido"
								: "Deve contenere 6 caratteri e non può contenere simboli"}
						</p>
					)}
				</div>

				<div className="input">
					<label htmlFor="password">Password: </label>
					<input
						required
						type="password"
						id="password"
						value={password}
						placeholder="Inserisci la tua password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					{password && (
						<p style={{ color: isPasswordValid ? "green" : "red" }}>
							{isPasswordValid
								? "Password valida"
								: "Deve contenere 6 caratteri e non può contenere simboli"}
						</p>
					)}
				</div>
				<div className="input">
					<label htmlFor="specializzazione">
						Seleziona la tua specializzazione:{" "}
					</label>
					<select
						required
						value={specializzazione}
						onChange={handleChange}
						id="specializzazione"
					>
						<option value="">-- Seleziona-- </option>
						<option value="Fornt-end">Front-end</option>
						<option value="Back-end">Back-end</option>
						<option value="Full-stack">Full-stack</option>
					</select>
				</div>

				<div className="input">
					<label htmlFor="esperienza">Anni di esperienza: </label>
					<input
						required
						type="number"
						id="esperienza"
						value={anni}
						placeholder="Inserisci i tuoi anni di esperienza"
						onChange={(e) => setAnni(e.target.value)}
					/>
				</div>

				<div className="input">
					<label htmlFor="descrizione">Breve descrizione: </label>
					<textarea
						required
						type="textarea"
						id="descrizione"
						value={descrizione}
						placeholder="Inserisci una breve descrizione"
						onChange={(e) => setDescrizione(e.target.value)}
					/>
					{descrizione && (
						<p style={{ color: isDescrizioneValid ? "green" : "red" }}>
							{isDescrizioneValid
								? "Descrizione valida"
								: "Deve contenere più di 100 caratteri ma meno di 1000"}
						</p>
					)}
				</div>
				<button type="submit">Conferma dati</button>
			</form>
		</div>
	);
}

export default App;
