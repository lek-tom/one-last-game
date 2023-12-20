# last-game-fr
Gra z grami statysytczno-losowo-zręcznościowymi

# Ogólne założenia, zasady i kireunki
1. Tymczasowo zabronione jest mergowanie z mainem, wszystko pozostaje na swoich branchach. Wiele aspektów może się zmienić, więc lepiej nie mergować
2. Design opiera się na kolorach: granatowy, szary, niebieski i zielony. Przykładem, inspiracją jest https://stake.com . Ta strona to inspiracja designu
3. Frontend w React z typescript, scss
4. Zmienne scss są zapisywane używając podłóg np: "className={styles.style_div_tablica}>"
5. Zmienne typescript typów, klas, funkcji camelCase, zmienne podkreślenia
6. Backend
7. Package magager to Yarn
8. App.tsx to strona główna
9. Folder Components służy do przechowywania komponentów
10. Folder Pages służy do przechowywania podstron
11. Te repo moze nie byc ostateczne lecz to co zostanie napisane nie pójdzie w zapomnienie. Być może uda się znaleźć lepszą metodę do tworzenia i ogranizacji projektu.
12. Jeśli kod przejdzie review to można dodać na nowego brancha z przedrostkiem pre-main- np: pre-main-login
13. Na koniec zaznaczam, że z roziwjaniem naszych umiejętnośći wszystko co jest napisane powyżej może ulec zmianie
14. Piotr ma prawo do wszystkiego i wszystkich albowiem władcą naszym jest
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
