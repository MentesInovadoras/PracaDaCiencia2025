export default function HeaderMonth({ date }) {
    const ptBRDateFormater = new Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        year: 'numeric',
    });

    const formattedDate = capitalizeFirstLetter(ptBRDateFormater.format(date));

    return (
        <header>
            <h2 className="mes_ano">{formattedDate}</h2>
        </header>
    );
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
