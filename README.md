# last-game-fr
Gra z grami statysytczno-losowo-zręcznościowymi

# Ogólne założenia, zasady i kireunki
1. Tymczasowo zabronione jest mergowanie z mainem, wszystko pozostaje na swoich branchach. Wiele aspektów może się zmienić, więc lepiej nie mergować
2. Design opiera się na kolorach: granatowy, szary, niebieski i zielony. Przykładem, inspiracją jest https://stake.com . Ta strona to inspiracja designu
3. Frontend w React z typescript, scss
4. Zmienne scss są zapisywane używając podłóg np: "className={styles.style_div_tablica}>"
5. Zmienne typescript typów, klas, funkcji camelCase, zmienne podkreślenia
6. Struktóra plików w frontend opiera się na składowaniu komponentu/strony w folderze component/page, w któym folder o nazwie przedmiotu zawiera plik tsx, styles.module.scss i inne wymagane pliki np: src/page/account/index.tsx, styles.module.scss
7. Backend w spring
8. Package magager to Yarn
9. App.tsx to strona główna
10. Folder Components służy do przechowywania komponentów
11. Folder Pages służy do przechowywania podstron
12. Te repo moze nie byc ostateczne lecz to co zostanie napisane nie pójdzie w zapomnienie. Być może uda się znaleźć lepszą metodę do tworzenia i ogranizacji projektu.
13. Jeśli kod przejdzie review to można dodać na nowego brancha z przedrostkiem pre-main- np: pre-main-login
14. Na koniec zaznaczam, że z roziwjaniem naszych umiejętnośći wszystko co jest napisane powyżej może ulec zmianie
