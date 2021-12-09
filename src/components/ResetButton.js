export default function ResetButton() {
    return (
        <div className="reset-button" onClick={() => window.location.reload()}>
            Tentar novamente
            <img src="assets/next.png" alt="" />
        </div>
    );
}