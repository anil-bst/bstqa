import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: quotemark
export const HowToUseTourneyLocalePolish: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Jak korzystać z Tourney',
    description: 'Dowiedz się, jak korzystać z Tourney w swojej społeczności',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: 'Tworzenie nowego konta',
      isActive: true,
      navSectionItems: [
        {
          title:
            '1. (Ten krok dotyczy tylko partnerów game.tv. Jeśli tworzysz turnieje na własnym serwerze, przejdź do kroku 2.) Udostępnij swój pseudonim Discord i identyfikator użytkownika administratorowi game.tv',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'Pseudonim Discord powinien zawierać 4-cyfrowy znacznik numeryczny',
              steps: [
                "Discord ID: Oto jak znaleźć identyfikator użytkownika 1<a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>",
                'Poczekaj, aż administrator game.tv potwierdzi, że konto zostało utworzone do tworzenia turniejów.',
              ],
            },
          ],
        },
        {
          title:
            "2. Odwiedź <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'Kliknij „Zaloguj się za pomocą Discord”',
            },
            {
              imageCaption: 'Kliknij „Autoryzuj”',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Konfigurowanie Tourney Bot dla Twojego serwera Discordr',
      navSectionItems: [
        {
          title:
            '1. W menu głównym po lewej stronie kliknij przycisk „Utwórz turniej”',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Na stronie Szablony turniejów znajdź grę, w której chcesz utworzyć turniej, i kliknij przycisk Dostosuj.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Na stronie Dostosuj turniej kliknij opcję Dodaj kolejny serwer.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            '4. Pojawi się przeglądarka i wyświetli interfejs Discord, prosząc o wybranie serwera, do którego chcesz dodać Bot.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'W menu rozwijanym pojawią się tylko serwery, na których jesteś administratorem.',
                'Wybierz serwer, na którym chcesz zainstalować bota, a następnie kliknij Autoryzuj.',
              ],
            },
          ],
        },
        {
          title:
            '5. Po prawidłowej autoryzacji pojawi się ekran potwierdzenia w tej samej przeglądarce. Teraz Tourney Bot jest zainstalowany na twoim serwerze Discord.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title:
            '6. Sprawdź serwer Discord, aby upewnić się, że bot został zainstalowany.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(8).png',
            },
          ],
        },
      ],
    },
    {
      id: 'tourney_ai_mode',
      title: 'Tryb AI turnieju',
      description:
        '<p> Tryb „Tourney AI” pozwala Tourney AI Bot samodzielnie tworzyć, uruchamiać i obsługiwać turnieje! </p><p><i> ** Pamiętaj, że ten tryb będzie dostępny tylko dla administratorów serwerów. Inne role z uprawnieniami turniejowymi nie będą miały dostępu do tego trybu. </i></p><p><i> ** W trybie AI dostępne są tylko gry w trybie drabinkowym (ramkowym). (tj. PUBG M, z wyłączeniem Free Fire) </i></p>',
      navSectionItems: [
        {
          title:
            '1. Na pulpicie nawigacyjnym znajduje się przycisk AI Tourney. Kliknij na to.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. Na stronie ustawień Bot najpierw wybierz serwer z menu rozwijanego. Następnie kliknij Włącz AI.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'Możesz dodać Tourney Bot do swojego serwera, wybierając Dodaj serwer tutaj, jeśli Tourney Bot nie został jeszcze zainstalowany.',
                'Kliknięcie przycisku Enable AI otworzy dla ciebie nowe menu.',
              ],
            },
          ],
        },
        {
          title: '3. Ustawienie moderatora',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                'Moderator trybu: Twoi administratorzy zostaną tutaj wymienieni. Każdy moderator może mieć inne ustawienia. Wybierz administratora, którego chcesz użyć.',
                'Role do wzmianki: W tej sekcji będziesz musiał powiedzieć botowi AI, jakie role pingować w każdej grze turniejowej AI. Jeśli nie wybierzesz roli, bot AI będzie wspominał @everyone, czego możesz nie chcieć.',
                'Dopasuj widoczność kanału: wybierz rolę, która ma być widoczna dla prywatnych kanałów turniejowych.',
              ],
            },
          ],
        },
        {
          title: '4. Ustawienia gry',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                'Aktywuj automatyczny wybór: jeśli to włączysz, bot AI zdecyduje, która gra będzie najbardziej popularna na twoim serwerze, więc nie będziesz musiał wybierać ręcznie.',
                'Jeśli opcja Aktywuj automatyczny wybór jest wyłączona, wystarczy wybrać gry, w których chcesz organizować turnieje na swoim serwerze. Bot AI będzie przeprowadzał turnieje tylko w ramach wybranej puli gier.',
              ],
            },
          ],
        },
        {
          title: '5. Ustawienia harmonogramu',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                'Automatycznie wybieraj godziny: jeśli to włączysz, bot AI zdecyduje, która godzina przyciągnie najwięcej uczestników i rozpocznie turnieje w tym czasie.',
                'Jeśli opcja Automatycznie wybieraj godziny jest wyłączona, wystarczy wybrać przedział czasu, w którym bot AI ma uruchamiać turnieje. Bot bot rozpocznie turnieje w wybranym przedziale czasowym.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Pełna lista Komend Discord',
      navSectionItems: [
        {
          title: '1. Do użytku w lobby turniejowym',
          innerContentList: [
            {
              steps: [
                '<strong>! Register</strong>: Umożliwi to rozpoczęcie procesu rejestracji. Można go używać tylko po rozpoczęciu rejestracji.',
                '<strong>! Unregister</strong>: Spowoduje to usunięcie Twojego miejsca z rejestracji, a także z Twojego zespołu.',
                '<strong>! Timer</strong>: Powie ci następny etap procesu turniejowego i ile czasu pozostało do tego etapu.',
                '<strong>! Myteam</strong>: Dzięki temu dowiesz się, kto jest w Twoim zespole i jaki jest jego status rejestracji.',
              ],
            },
          ],
        },
        {
          title: '2. Można używać w DM z Tourney Bot',
          innerContentList: [
            {
              steps: [
                "<strong>! Createteam</strong><b class='highlight'><team name><ingame username></b>: To zarejestruje nową drużynę do listy. Będziesz jedyną osobą w tym zespole, dopóki nie udostępnisz kodu zespołu i nie dopuścisz, aby inni dołączyli do Twojego zespołu.",
                "<strong>! Jointeam</strong><b class='highlight'><team code><ingame username></b>: To wprowadzi cię do istniejącego zespołu, który stworzył ktoś inny.",
                "<strong>! Joinsolo <b class='highlight'><ingame username></b>: To zarejestruje Cię do turnieju solo.",
                "<strong>! Checkin</strong><b class='highlight'><code provided></b>: Jeśli istnieje wymóg odprawy i jeśli rozpoczął się czas odprawy, pozwoli to na odprawę i dokończenie rejestracji.",
              ],
            },
          ],
        },
        {
          title: '3. Do użytku w lobby gier',
          innerContentList: [
            {
              steps: [
                "<strong>! Wynik</strong> <b class='highlight'><team name></b>: Oto jak przesłać wynik meczu do bota. Wymagane jest dołączenie zrzutu ekranu ekranu zwycięstwa wraz z poleceniem.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Tworzenie nowego turnieju',
      description:
        '<i>Krok 1) ~ 2) są dokładnie takie same, jak pokazano powyżej w sekcji Konfigurowanie bota Tourney dla Twojego serwera Discord Server. Jeśli wykonałeś już te czynności, możesz przejść do kroku 3) .</i>',
      navSectionItems: [
        {
          title:
            '1. W menu głównym po lewej stronie kliknij przycisk „Utwórz turniej”',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Na stronie Szablony turniejów znajdź grę, w której chcesz utworzyć turniej, i kliknij przycisk Dostosuj.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Na stronie „Dostosuj turniej” przewiń na sam dół i wybierz Ustawienia zaawansowane.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                'Monit poprosi o potwierdzenie tej akcji. Po prostu wybierz Kontynuuj.',
              ],
            },
          ],
        },
        {
          title: '4. Wypełnij sekcję Informacje podstawowe',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                'Nazwa turnieju: wpisz nazwę turnieju. To pojawi się jako twój tytuł kategorii w twoim Discord. Litery będą wyświetlane dużymi literami. Emoji są dozwolone w tej sekcji.',
                'Gra: wybierz grę, a następnie wybierz format gry. (np. PUBG M -> Duo) To decyduje, czy twój turniej będzie turniem w nawiasach czy lobbowanym.',
                "Harmonogram: wybierz czas rozpoczęcia rejestracji, czas zakończenia rejestracji i czas rozpoczęcia turnieju. Daty te będą wyświetlane na dole ogłoszenia o turnieju.<div class='inner-content'><p> Czas rozpoczęcia rejestracji: w tym momencie gracze będą mogli rozpocząć rejestrację do turnieju na kanale Discord. Do tego czasu gracze nie będą mogli się zarejestrować, a polecenie „! Register” nie będzie działać na kanale.</p><p>Czas zakończenia rejestracji: Po tym czasie gracze nie będą mogli się już zarejestrować. Czas zakończenia rejestracji nie może być krótszy niż 10 minut przed czasem rozpoczęcia turnieju. Proces odprawy można rozpocząć dopiero po zakończeniu rejestracji. Możesz także utworzyć wspornik lub lobby dopiero po zakończeniu rejestracji.</p><p>Czas rozpoczęcia turnieju: To jest czas rozpoczęcia turnieju </p></div>",
                'Strumień: Jeśli jesteś streamerem i chcesz ogłosić swój kanał strumieniowy wraz z ogłoszeniem o turnieju, kliknij „Włącz link” i umieść tutaj link do strumienia.',
                'Region: wybierz swój kraj tutaj. To zdecyduje, w jakim języku będą wyświetlane ogólne teksty. (np. USA -> Ogólne teksty ogłoszenia będą w języku angielskim).',
              ],
            },
          ],
        },
        {
          title: '5. Wypełnij sekcję Szczegóły',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                'Opis: Tutaj możesz umieścić ogólne informacje o swoim turnieju. (np. data i godzina, tryb gry, limit graczy, godzina zameldowania itp.) Informacje te będą wyświetlane w ogłoszeniu u góry ogłoszenia tuż pod tytułem.',
                'Reguły: możesz wprowadzić dowolną konkretną regułę, którą chcesz dodać do swojego turnieju. (np. ban, limit czasowy, najlepszy z 3 itd.) Informacje te zostaną wyświetlone w ogłoszeniu tuż pod opisem.',
                'Nagrody: W tej sekcji możesz umieścić informacje o nagrodach. Bądź jak najbardziej szczegółowy; gracze są wrażliwi na nagrody i kwoty w dolarach. Informacje te zostaną wyświetlone w ogłoszeniu tuż pod Regułami.',
              ],
            },
          ],
        },
        {
          title: '6. Wypełnij sekcję Platforma',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'Wybierz platformę: Wybierz Discord',
                'Discord Server: Wybierz serwer, na którym chcesz ogłosić swój turniej.',
                'Role do wzmianki: jest to rola, którą turniej będzie pingować, gdy zostanie ogłoszony w Discord.',
                'Pokaż rolom: ta rola będzie mogła zobaczyć zapowiedź turnieju i kanały bez pingowania. (Zalecana rola to @everyone chyba że chcesz zrobić prywatny turniej).',
                'Widoczność kanału: po utworzeniu wspornika / lobby bot utworzy prywatne kanały dla zarejestrowanych graczy. Rola, którą wybierzesz tutaj, będzie widzieć te prywatne kanały. Więc wybierz rolę, którą Ty (administrator turnieju) jesteś oznaczony. W przeciwnym razie nie będziesz widzieć kanałów prywatnych.',
              ],
            },
          ],
        },
        {
          title: '7. Wypełnij sekcję Ustawienia dopasowania',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                'Format turnieju: jest to już określone przez grę i format gry wybrany w sekcji Informacje podstawowe.',
                'Rejestracja indywidualna (tylko dla wydarzeń drużynowych): Zaznacz tę opcję, jeśli chcesz tworzyć zespoły losowo i nie zezwalać na zespoły wstępnie utworzone.',
                'Maksymalna dozwolona liczba graczy / drużyn: Wybierz maksymalną drużynę, na którą chcesz zezwolić.',
                'Liczba zwycięzców: Wybierz żądaną liczbę zwycięzców. (1 ~ 3)',
                'Zaewidencjonuj: kliknij tę opcję, jeśli chcesz włączyć proces odprawy w turnieju. Zarejestrowani gracze muszą się zameldować, aby wziąć udział w wydarzeniu',
                'Czas odprawy: ten czas zadecyduje o tym, ile czasu odprawy zamierzasz zezwolić przed rozpoczęciem turnieju. Domyślne 10-minutowe okno między odprawą a czasem rozpoczęcia turnieju. To okno jest regulowane. (np. jeśli wybierzesz 20 minut, proces odprawy rozpocznie się 30 minut przed turniejem i zakończy 10 minut przed turniejem).',
                'Lista oczekujących: Zaznacz tę opcję, jeśli chcesz włączyć listę oczekujących na swój turniej. Po wyłączeniu będziesz mógł przyjmować graczy do maksymalnej liczby graczy / drużyn, które wybrałeś powyżej.',
                'Automatycznie publikuj wyniki: Zaznaczając to, zezwalasz botom na przejęcie weryfikacji wyników dla każdej rundy. (np. Drużyna 1 przesyła wyniki do bota -> Bot pyta Drużynę 2, czy wynik jest prawdziwy -> Jeśli Drużyna 2 potwierdzi lub nie zareaguje, bot przejdzie do przodu Drużyny 1 z koniecznością ingerencji.) Zaznaczając to pole wyboru, zweryfikujesz każdą dopasowanie wyników i awansowanie zwycięzców ręcznie.',
                'Zezwól na niekompletną drużynę (tylko w przypadku wydarzeń drużynowych): Zaznaczenie tej opcji spowoduje, że gracze będą mogli zarejestrować się jako drużyna, nawet jeśli ich drużyna nie jest kompletna. Jest to przydatne, gdy chcesz pozwolić liderom zespołów najpierw zapisać się do swojego zespołu, aby zaoszczędzić miejsce w turnieju. Jeśli ta opcja jest wyłączona, rejestracja zostanie zakończona tylko wtedy, gdy wszyscy członkowie każdego zespołu zakończą rejestrację indywidualną.',
              ],
            },
          ],
        },
        {
          title: '8. Kliknij przycisk Utwórz, aby kontynuować',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                'Kliknięcie przycisku<i> Utwórz </i> nie powoduje natychmiastowego ogłoszenia turnieju. Narzędzie do turnieju natychmiast pyta, czy chcesz opublikować <i> turniej. <i>Publishing</i> ogłosi turniej na twoim serwerze Discord. Możesz zawsze <i>Publish</i> później, klikając <i> później.</i>',
                'Pamiętaj, aby przejrzeć wszystkie informacje przed opublikowaniem swojego turnieju. Po opublikowaniu nie będzie można edytować ogłoszenia.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'Tournament Dashboard',
      navSectionItems: [
        {
          title:
            '1. Po utworzeniu turnieju będzie można zobaczyć swój turniej na liście na pulpicie nawigacyjnym.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. Kliknij turniej, aby wyświetlić szczegóły i zarejestrowanych graczy, zarządzać nawiasami i lobby oraz wysyłać nagrody. (Funkcja nagrody jest dostępna tylko w turniejach partnerskich game.tv na serwerze BlueStacks Discord.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                'Edycja: za pomocą tego przycisku możesz zmienić dowolne informacje. Pamiętaj, że edycja informacji w narzędziu nie zmieni informacji, które zostały już ogłoszone na Twoim serwerze Discord.',
                'Publikuj / Cofnij publikację: jeśli tylko utworzyłeś swój turniej i jeszcze go nie opublikowałeś, możesz kliknąć przycisk Publikuj, aby go uruchomić. Jeśli już opublikowałeś swój turniej, ale chcesz wstrzymać się z nową rejestracją, możesz to zrobić, klikając Cofnij publikację. (Cofnij publikację nie usunie ani nie usunie ogłoszenia na twoim serwerze Discord).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'Podczas okresu rejestracji',
      navSectionItems: [
        {
          title:
            '1. W tym okresie użytkownicy Discord będą mogli zarejestrować się na kanale lobby turniejowego, wpisując polecenie „! Register”, jeśli rejestracja jest w tym czasie otwarta.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. Zaraz po wprowadzeniu polecenia „! Register” użytkownicy otrzymają bezpośrednią wiadomość od Tourney Bot z prośbą o dodatkowe informacje na temat swojego identyfikatora w grze i nazwy zespołu.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            '3. Gdy użytkownik odpowie z powrotem na Tourney Bot przy użyciu poprawnych poleceń w DM, otrzyma od Bot wiadomość o zakończeniu rejestracji. (Jeśli nie otrzymali wiadomości o zakończeniu, nie są zarejestrowani w turnieju i powinni spróbować zarejestrować się od nowa).',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                'Po zakończeniu procesu rejestracji uczestnik otrzyma nową rolę; nazwa roli jest dokładnie taka sama jak nazwa twojego turnieju.',
              ],
            },
          ],
        },
        {
          title:
            '4. Gdy użytkownicy Discord rejestrują się w turnieju, będziesz mógł zobaczyć, ilu użytkowników zarejestrowało się w twoim turnieju na naszym pulpicie nawigacyjnym. Możesz również sprawdzić ich nazwy, usunąć gracza lub usunąć zespół z tego narzędzia.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(29).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(30).png',
            },
          ],
        },
        {
          title:
            '5. Jeśli odprawa jest włączona, proces odprawy rozpocznie się o określonej godzinie. (np. jeśli ustawisz 30 minut jako czas odprawy, proces odprawy rozpocznie się 30 minut przed turniejem).',
        },
        {
          title:
            '6. Zarówno zarejestrowani użytkownicy, jak i użytkownicy z listy oczekujących otrzymają żądanie zameldowania od Tourney Bot za pośrednictwem bezpośredniej wiadomości w Discord. Użytkownicy muszą postępować zgodnie z instrukcjami Tourney Bot i wprowadzić polecenie odprawy, aby zakwalifikować się do wydarzenia.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. Użytkownicy otrzymają komunikat o zakończeniu zameldowania od Tourney Bot, jeśli poprawnie wprowadzą polecenie zameldowania.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(32).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_bracketed',
      title: 'Turniej Koordynacyjny - Konkurs Drabinkowy',
      navSectionItems: [
        {
          title:
            '1. Istnieją 3 warunki, które pozwalają ci stworzyć drabinkę dla twojego turnieju:',
          innerContentList: [
            {
              steps: [
                'za. Twój turniej jest pełny i nie zezwoliłeś na listę oczekujących.',
                'b. Twoja rejestracja się zakończyła i nie włączyłeś procesu odprawy.',
                'c. Rejestracja i odprawa zakończyły się. (10 minut przed czasem turnieju)',
              ],
            },
          ],
        },
        {
          title:
            '2. Po spełnieniu któregokolwiek z tych 3 warunków zobaczysz przycisk Utwórz nawias w zakładce Nawiasy. Kliknij go, aby utworzyć wspornik.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. Jak tylko zostanie utworzony wspornik w twoim narzędziu turniejowym, ten sam wspornik zostanie ogłoszony na kanale Discord, pingując wszystkich zarejestrowanych uczestników turnieju.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(34).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(35).png',
            },
          ],
        },
        {
          title:
            '4. Wraz z ogłoszeniem klamrowym bot utworzy również prywatne kanały dla wszystkich meczów na żywo. Każdy kanał prywatny zaprasza tylko uczestników meczu. Uczestnicy mogą korzystać z tego kanału prywatnego, aby komunikować się ze sobą o swoim meczu (tj. Dzielić kod pokoju, udostępniać identyfikator gracza) i zgłaszać wyniki',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            '5. Gracze muszą zgłaszać wyniki w kanale prywatnym za pomocą polecenia „! Wynik <team name>”. Zrzut ekranu musi zostać dołączony, aby polecenie! Score mogło zostać poprawnie zarejestrowane.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Po poprawnym przesłaniu wyniku bot odpowie z potwierdzeniem.',
              ],
            },
          ],
        },
        {
          title:
            '6. Po przesłaniu wyniku na meczu pojawi się czerwona kropka, abyś (administrator turnieju) mógł zobaczyć, że wynik został przesłany.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                'Jeśli opcja „Automatycznie publikuj wyniki” jest włączona, bot przyjmuje pierwszy wynik przesłany jako prawdziwy wynik. Jeśli nowy wynik nie zostanie przesłany w ciągu 5 minut, bot awansuje zwycięską drużynę w pierwszym zgłoszeniu wyniku.',
                'Jeśli opcja „Automatycznie publikuj wyniki” jest wyłączona, musisz spojrzeć na załączony plik, sprawdzić wynik, a następnie ręcznie przejść do zwycięzcy. (tj. kliknij zwycięzcę, a następnie wybierz Aktualizuj wynik).',
              ],
            },
          ],
        },
        {
          title:
            '7. Gdy nawias dobiegnie końca i zostanie wybrany zwycięzca końcowy, bot automatycznie ogłosi zwycięzcę w kanale turniejowym.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(40).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(41).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_lobbied',
      title: 'Turniej Koordynacyjny - Konkurs Lobbied',
      navSectionItems: [
        {
          title:
            '1. Istnieją 3 warunki, które pozwalają ci stworzyć lobby dla twojego turnieju:',
          innerContentList: [
            {
              steps: [
                'a. Twój turniej jest pełny i nie zezwoliłeś na listę oczekujących.',
                'b. Twoja rejestracja się zakończyła i nie włączyłeś procesu odprawy.',
                'c. Rejestracja i odprawa zakończyły się. (10 minut przed czasem turnieju)',
              ],
            },
          ],
        },
        {
          title:
            '2. Po spełnieniu któregokolwiek z tych 3 warunków zobaczysz przycisk Utwórz lobby w zakładce lobby. Kliknij na nią, aby stworzyć swoje lobby.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. Dla każdego lobby kliknij 3-liniowy przycisk menu, a następnie kliknij Utwórz kanał. Spowoduje to utworzenie prywatnego kanału Discord dla każdego lobby wyłącznie dla graczy w każdym lobby.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(43).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(44).png',
            },
          ],
        },
        {
          title:
            '4. Jeśli (administrator turnieju) chcesz wysłać wiadomość do każdego lobby (tj. Dopasuj kod i PW), możesz użyć funkcji Wyślij wiadomość z każdego lobby. Nadawcą będzie Tourney (bot), więc prawdopodobnie przyciągnie wzrok graczy. Lub możesz wysłać wiadomość bezpośrednio na kanale, wpisując ją. (W tym przypadku wyślemy Ci wiadomość.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(45).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(46).png',
            },
          ],
        },
        {
          title:
            '5. Jeśli nie tworzysz każdego meczu dla graczy, możesz po prostu przypisać gracza do każdego kanału prywatnego, aby utworzyć pokój gier i udostępnić kod / pw.',
        },
        {
          title:
            '6. Gracze mogą zgłaszać wyniki w kanale prywatnym, używając polecenia „! Wynik <team name>”. Zrzut ekranu musi zostać dołączony, aby polecenie! Score mogło zostać poprawnie zarejestrowane.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Po poprawnym przesłaniu wyniku bot odpowie z potwierdzeniem.',
              ],
            },
          ],
        },
        {
          title:
            '7. Po przesłaniu wyniku na meczu pojawi się czerwona kropka, abyś (administrator turnieju) mógł zobaczyć, że wynik został przesłany. Kliknij Wyświetl wyniki, aby wyświetlić przesłane zrzuty ekranu.',
          innerContentList: [
            {
              imageCaption:
                'Nie musisz czekać na przesłanie wyniku, jeśli znasz już wynik. (tzn. jeśli obserwowałeś mecz, najprawdopodobniej znasz już wynik).',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(47).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(48).png',
            },
          ],
        },
        {
          title: '8. Aby wybrać zwycięzcę (-ów) z każdego lobby,',
          innerContentList: [
            {
              imageCaption:
                'Kliknij 3-liniowy przycisk menu, a następnie przycisk Record Score.',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'Zapisz wyniki gracza zgodnie z przesłanymi wynikami. (Zwycięscy gracze powinni uzyskać wyższe wyniki).',
                'Aby dopasować wiele rund, kliknij przycisk Utwórz rundę u dołu. Następnie zapisz więcej wyników zgodnie z wynikami.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: ['Po zakończeniu nagrywania kliknij Aktualizuj.'],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Przenoszenie graczy do nowych lobby',
      navSectionItems: [
        {
          title:
            '1. Jeśli potrzebujesz turnieju lobbującego, w którym gracze awansują / przenoszą się do nowych lobby, musisz wybrać opcję „Eliminacja” w opcji Format turnieju.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'Lobby się liczy: ile początkowych lobby chcesz mieć w swoich rundach wstępnych',
                'Drużyna się liczy: ile drużyn będzie w każdym lobby',
              ],
            },
            {
              imageCaption:
                '<i> * Jeśli utworzysz turniej z pojedynczym lobby lub z wieloma lobby, nie będziesz mieć możliwości utworzenia nowych lobby, a zatem nie będziesz mógł przenieść / awansować graczy do nowych lobby. Jak widać na poniższym przykładzie (turniej z wieloma lobby), brakuje przycisku „+” do utworzenia nowego lobby.</i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. Jeśli jako format turnieju wybrano „Eliminacja”, zobaczysz opcję utworzenia nowego lobby oprócz początkowej liczby lobby, którą wybrałeś.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. Podczas gdy początkowe lobby są nadal aktywne, kliknij przycisk „+”, aby utworzyć nowe lobby. W tym nowym lobby będziesz awansować / przenosić swoich graczy do przyszłej rundy.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'Nowe lobby powinno być puste podczas jego tworzenia.',
                'Jeśli chcesz utworzyć wiele nowych lobby, po prostu kliknij ponownie przycisk „+”.',
              ],
            },
          ],
        },
        {
          title:
            "4. Aby awansować / przenieść graczy do nowego lobby, musisz najpierw ZAKOŃCZYĆ istniejące lobby. (Zapoznaj się z sekcją <a href='how-to-use-tourney?tab=tournament-lobbied-competition'> Koniec turnieju - Konkurs lobbowany</a>, jak zakończyć lobby). Po zakończeniu lobby kliknij przycisk „Edytuj lobby” w nowym lobby.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i> * UWAŻAJ, aby nie zakończyć całego turnieju! Po zakończeniu wszystkich lobby narzędzie wyświetli wyskakujące okienko z pytaniem, czy chcesz zakończyć turniej. Jeśli zakończysz turniej, NIE będziesz mógł przenosić graczy ani dodawać nowych lobby.</i>',
              ],
            },
          ],
        },
        {
          title: '5. Wybierz lobby, z którego chcesz przenieść graczy.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                'Możesz kliknąć Dodaj lobby, aby wykonać zbiorcze transfery z wielu lobby.',
                'W tym przykładzie zakończono tylko lobby 1 i lobby 2. Lobby 3 jest nadal aktywne. Dlatego widzisz tylko Lobby 1 i 2 jako opcje.',
              ],
            },
          ],
        },
        {
          title: '6. Wybierz pozycje graczy, których chcesz przenieść.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'Możesz wybrać wiele pozycji.',
                'Pozycja odnosi się do umiejscowienia gracza po zakończeniu lobby. (Pozycja 1 = gracz / drużyna na 1. miejscu w tym lobby)',
                'Na przykład, jeśli chcesz awansować najlepszych 2 graczy z lobby 1, wybierz pozycje 1 i 2.',
              ],
            },
          ],
        },
        {
          title:
            '7. Po zakończeniu wybierania graczy, których chcesz przenieść, kliknij przycisk Zapisz. Transfer zakończony!',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(58).png',
            },
          ],
        },
      ],
    },
    {
      id: 'ending_a_tournament_bracketed_competition',
      title: 'Zakończenie turnieju - Konkurs drabinkowy (ramkowy)',
      description:
        'Twój turniej zakończy się automatycznie, gdy tylko ostateczny zwycięzca zostanie wybrany w zakładce Wsparcia.',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Zakończenie turnieju - Lobbied Competition',
      navSectionItems: [
        {
          title:
            '1. Po zaktualizowaniu wszystkich lobby z dokładnymi wynikami i zwycięzcami, kliknij przycisk menu z 3 liniami, a następnie przycisk Zakończ lobby dla każdego lobby. Zrób to dla wszystkich lobby. (Dobrą praktyką jest kończenie lobby zaraz po jego aktualizacji. Nie będzie można przenosić graczy, jeśli lobby nie zostanie zakończone).',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. Po zakończeniu wszystkich lobby narzędzie Game.tv poinformuje Cię, że Twój turniej się zakończy i że wyniki zostaną opublikowane.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                'Jeśli chcesz zakończyć turniej i opublikować wyniki, kliknij <i> Kontynuuj</i>',
                'Jeśli nie chcesz kończyć turnieju ani publikować wyników, kliknij <i>Close.</i> (Twój turniej się nie zakończy, a wyniki nie zostaną opublikowane).',
                'Będzie opcja zakończenia turnieju i opublikowania wyników, jeśli wybierzesz <i>Close.</i>',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Wysyłanie nagród do zwycięzców',
      description:
        '<p><i> ** Ta funkcja jest dostępna tylko dla partnerów game.tv, którzy produkują turnieje na serwerach BlueStacks Discord. ',
      navSectionItems: [
        {
          title:
            '1. Po wybraniu zwycięzców i prawidłowym zakończeniu turnieju zobaczysz zwycięzców wymienionych w zakładce Nagrody.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. Po prostu wypełnij informacje dla każdego zwycięzcy.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                'Pamiętaj, aby dokładnie sprawdzić preferencje wygranych u zwycięzców (np. Geo, rodzaj nagrody itp.)',
                "Niektóre opcje mogą być niedostępne dla niektórych obszarów geograficznych. Aby wyświetlić wszystkie dostępne opcje nagród, odwiedź stronę <a href='https://www.seagm.com/'>https: //www.seagm.com/</a>",
                'Możesz ustawić wiele nagród dla każdego zwycięzcy. (np. W przypadku nagrody Google Play (US) 20 USD należy skonfigurować dwie nagrody Google Play (US) 10 USD).',
                "(Dla NA) Ogólnie rzecz biorąc, nie możemy wydawać do 4 $ więcej, aby znaleźć odpowiednią opcję / kwotę nagrody. W przypadku Steam, <div class='inner-content'> - Za 5 USD / 10 USD, użyj odpowiednio Steam (Hong Kong) 40 HKD / 80 HKD. <br> - W przypadku 20 USD / 25 USD użyj odpowiednio Steam (Malezja) RM 80 / RM 100. </div>",
              ],
            },
          ],
        },
        {
          title:
            '3. Po dokładnym wypełnieniu wszystkich informacji kliknij przycisk Wyślij nagrodę.',
          innerContentList: [
            {
              steps: [
                'Spowoduje to wysłanie żądania dystrybucji nagrody do administratora game.tv. Przejrzą informacje o nagrodzie, a następnie zatwierdzą lub odrzucą wniosek.',
                'Po zatwierdzeniu wniosku zwycięzcy otrzymają DM od Tourney Bot, który zawiera wymienialne kody podarunkowe. Zobaczysz również, że dostawa została zakończona w zakładce Nagrody.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Klonowanie istniejących turniejów',
      description:
        '<p> Klonując istniejące turnieje, gospodarz turniejów może z łatwością powielać turnieje tego samego formatu w kółko, bez konieczności każdorazowego ustawiania szczegółów. <br /><i> ** Nie możesz sklonować turnieju i zmienić jego trybu turniejowego: lobby kontra nawias.',
      navSectionItems: [
        {
          title:
            '1. Znajdź turniej, który chcesz zduplikować z pulpitu nawigacyjnego. Po prawej stronie turnieju kliknij przycisk menu z trzema kropkami.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'Jeśli już zakończyłeś turniej, przycisk Edytuj i Pauza nie będzie dostępny.',
                'Jeśli już wyczyściłeś turniej, przycisk Oczyść nie będzie dostępny.',
              ],
            },
          ],
        },
        {
          title:
            '2. Kliknij<i>Clone</i>. Pojawi się nowy ekran, w którym należy wprowadzić minimalne informacje.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'Nazwa turnieju: nie zostanie przeniesiony z istniejącego turnieju. Musisz podać nową nazwę turnieju',
                'Discord Server: Przeniesie się z istniejącego turnieju. Wybierz inny serwer, jeśli chcesz powielić istniejący turniej na innym serwerze.',
                'Gra: tryby gry zostaną przeniesione z istniejącego turnieju. Dostosuj ustawienia, jeśli chcesz je zmienić.',
                'Harmonogram: Harmonogram nie zostanie przeniesiony z istniejącego turnieju. Będziesz musiał wprowadzić nowy harmonogram.',
                'Nagrody: Informacje o nagrodach zostaną przeniesione z istniejącego turnieju. Edytuj, jeśli chcesz zmienić.',
                'Strumień: Przeniesiony z istniejącego turnieju. Edytuj, jeśli chcesz zmienić.',
                'Ustawienia zaawansowane: Jeśli chcesz zmienić inne szczegóły konfiguracji, kliknięcie tego spowoduje przejście do oryginalnych opcji konfiguracji.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
