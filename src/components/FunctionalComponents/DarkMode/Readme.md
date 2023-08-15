# **DarkMode (Header)**

CZ:

1. Tento kód vytváří komponentu „DarkMode“, která je zodpovědná za přepínání motivu webu mezi světlým a tmavým.
2. Komponenta začíná deklarací proměnné. Jedna proměnná "body" získá odkaz na značku těla stránky pomocí metody document.body a druhá proměnná "theme" je inicializována pomocí useState() - to je funkční háček používaný v Reactu k vytvoření stavu komponenty. V tomto případě háček useState() vrátí pole, kde první prvek je aktuální stav a druhý prvek je funkce, která stav aktualizuje. Počáteční hodnota stavu "téma" je získána z localStorage. Pokud v localStorage není uložen žádný motiv, je ve výchozím nastavení vybrán světlý motiv.
3. Funkce "toggleTheme" slouží k přepínání mezi tématy. Nejprve zkontroluje aktuální téma a nastaví nové téma v závislosti na tom. Poté aktualizuje stav "téma" pomocí funkce setTheme(), která předá hodnotu nového stavu.
4. Dále je useEffect(), což je další funkční háček, který React používá k provádění vedlejších efektů v reakci na změnu stavu komponenty. V tomto případě se useEffect() volá pokaždé, když se změní stav "téma". V závislosti na zvoleném motivu se třída „světlá“ nebo „tmavá“ přidá nebo odebere z tagu těla stránky.
5. Nakonec komponenta vrátí tlačítko „DarkMode“, které má ikonu, která vizuálně označuje, že tlačítko je zodpovědné za přepínání motivu. Po kliknutí na tlačítko se zavolá funkce toggleTheme().

EN:

1. This code creates the "DarkMode" component, which is responsible for switching the theme of the site between light and dark.
2. A component starts with a variable declaration. One "body" variable gets a reference to the page's body tag using the document.body method, and the second "theme" variable is initialized with useState() - this is a functional hook used in React to create the state of a component. In this case, the useState() hook returns an array where the first element is the current state and the second element is the function that updates the state. The initial value of the "theme" state is obtained from localStorage. If no theme is stored in localStorage, the light theme is selected by default.
3. The "toggleTheme" function is used to switch between themes. It first checks the current theme and sets a new theme depending on that. It then updates the "theme" state with the setTheme() function, which passes in the new state value.
4. Next up is useEffect(), which is another functional hook that React uses to perform side effects in response to a component's state change. In this case, useEffect() is called every time the "theme" state changes. Depending on the chosen theme, the "light" or "dark" class is added or removed from the page's body tag.
5. Finally, the component returns a "DarkMode" button, which has an icon that visually indicates that the button is responsible for switching the theme. When the button is clicked, the toggleTheme() function is called.

RU:

1. Этот код создает компонент "DarkMode", который отвечает за переключение темы сайта между светлой и темной.
2. Компонент начинается с объявления переменных. Одна переменная "body" получает ссылку на тег body страницы с помощью метода document.body, а вторая переменная "theme" инициализируется с помощью useState() - это функциональный хук, используемый в React для создания состояния компонента. В этом случае, хук useState() возвращает массив, где первый элемент - текущее состояние, а второй элемент - функция, которая обновляет состояние. Первоначальное значение состояния "theme" получается из localStorage. Если в localStorage не сохранена никакая тема, по умолчанию выбирается светлая тема.
3. Функция "toggleTheme" используется для переключения между темами. Она сначала проверяет текущую тему и устанавливает новую тему в зависимости от этого. Затем она обновляет состояние "theme" с помощью функции setTheme(), которая передает новое значение состояния.
4. Далее следует useEffect() - это еще один функциональный хук, который используется в React для выполнения побочных эффектов в ответ на изменение состояния компонента. В этом случае useEffect() вызывается каждый раз, когда меняется состояние "theme". В зависимости от выбранной темы, класс "light" или "dark" добавляется или удаляется из тега body страницы.
5. Наконец, компонент возвращает кнопку "DarkMode", которая имеет иконку, которая визуально указывает, что кнопка отвечает за переключение темы. При нажатии на кнопку вызывается функция toggleTheme().
