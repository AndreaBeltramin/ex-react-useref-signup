import { useMemo, useRef, useState } from "react";
import "./App.css";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

function App() {
	const [name, setName] = useState("Andrea");
	const [username, setUsername] = useState("Andre99");
	const [password, setPassword] = useState("Password1@");
	const [specializzazione, setSpecializzazione] = useState("Front-end");
	const [anni, setAnni] = useState("1");
	const [descrizione, setDescrizione] = useState(
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto tenetur eveniet nostrum, tempora, velit officia explicabo, nesciunt sed reprehenderit facilis. Magnam velit modi eius minima numquam quia dolorem vero!"
	);

	const nameRef = useRef();

	// al posto di fare lo split per ottenere i caratteri singoli possiamo fare lo spread [...username]
	const isUsernameValid = useMemo(() => {
		const charsValid =
			username.trim().length >= 6 &&
			username
				.toLowerCase()
				.split("")
				.every((char) => letters.includes(char) || numbers.includes(char)) &&
			username
				.toLowerCase()
				.split("")
				.every((char) => !symbols.includes(char));
		return charsValid;
	}, [username]);

	const isPasswordValid = useMemo(() => {
		return (
			password.trim().length >= 8 &&
			password
				.toLowerCase()
				.split("")
				.some((char) => letters.includes(char)) &&
			password
				.toLowerCase()
				.split("")
				.some((char) => numbers.includes(char)) &&
			password
				.toLowerCase()
				.split("")
				.some((char) => symbols.includes(char))
		);
	}, [password]);

	const isDescrizioneValid = useMemo(() => {
		return (
			descrizione.trim().length >= 100 && descrizione.trim().length <= 1000
		);
	}, [descrizione]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (anni < 0) {
			alert("Inserisci un valore positivo");
			return;
		}
		if (!isUsernameValid || !isPasswordValid || !isDescrizioneValid) {
			alert("Inserisci un valore corretto per proseguire");
			return;
		}

		console.log("Valori inseriti:", {
			name,
			username,
			password,
			specializzazione,
			anni,
			descrizione,
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
						ref={nameRef}
						placeholder="Inserisci il tuo nome"
						onChange={(e) => setName(nameRef.current.value)}
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
								: "Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"}
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
						onChange={(e) => {
							setSpecializzazione(e.target.value);
						}}
						id="specializzazione"
					>
						<option value="">-- Seleziona-- </option>
						<option value="Front-end">Front-end</option>
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
						className="textarea"
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
								: `Deve contenere tra 100 e 1000 caratteri (
										${descrizione.trim().length}
								  )`}
						</p>
					)}
				</div>
				<button type="submit">Conferma dati</button>
			</form>
		</div>
	);
}

export default App;
