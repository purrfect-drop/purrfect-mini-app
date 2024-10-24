import { useCallback } from "react";
import Icon from "./assets/images/icon.png?format=webp&w=256";
function App() {
  const handleButtonClick = useCallback(() => {
    window.Telegram.WebApp?.openTelegramLink("https://t.me/purrfect_drop");
  }, []);
  return (
    <div className="flex flex-col p-4 min-h-dvh">
      <div className="flex flex-col w-full max-w-xs gap-3 m-auto">
        <img src={Icon} className="mx-auto w-28 h-28" />
        <h1 className="text-3xl text-center font-turret-road">Purrfect</h1>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          Open Channel
        </button>
      </div>
    </div>
  );
}

export default App;
