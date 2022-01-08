## Realizacja zadania nr1 w ramach laboratorium PFSwChO

Projekt jest modyfikacją zadania zaprezentowanego na laboratoriach nr 9.
Adres do strony -> [link](http://129.159.252.127/).

### Modyfikacje:

- dodanie dwóch dodatkowych usług do produkcyjnej wersji docker-compose( postgres database + redis)
- dodanie przycisku "Historia", automatyczne wyświetlanie obliczonej wartości k po kliknięciu przycisku Submit
- wersjonowanie aplikacji przy wykorzystaniu [semantic-release](https://github.com/semantic-release/semantic-release)
- integracja projektu z [gitlab pipelines](https://docs.gitlab.com/ee/ci/pipelines/) <-> mirror repository = [Gitlab](https://gitlab.com/PrzemyslawRodzik/fibService)

---

#### W celu uruchomienia :

- wersji deweloperskiej należy:
  - sklonować repo
  - wpisać komendę
  - ```
      docker-compose -f docker-compose.dev.yml up -d
    ```
- wersji produkcyjnej należy:
  - sklonować repo
  - w pliku docker-compose.yml uzupełnić zmienne środowiskowe( domyślne wartości znajdują się w pliku docker-compose.dev.yml)
  - wpisać komendę
  - ```
      docker-compose up -d
    ```

---

# Więcej informacji w pliku pdf
