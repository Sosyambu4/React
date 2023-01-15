import style from 'style-components'

const Globalstyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap");

:root {
  --color-violet: #5964e0;
  --color-light-violet: #939bf4;
  --color-very-dark-blue: #19202d;
  --color-midnight: #121721;
  --color-white: #fff;
  --color-light-grey: #f4f6f8;
  --color-grey: #9daec2;
  --color-dark-grey: #6e8098;
  --font-size-h1: 2.8rem;
  --line-height-h1: 3.4rem;
  --font-size-h2: 2.4rem;
  --line-height-h2: 2.9rem;
  --font-size-h3: 2rem;
  --line-height-h3: 2.4rem;
  --font-size-h4: 1.4rem;
  --line-height-h4: 1.8rem;
  --font-size-body: 1.6rem;
  --line-height-body: 2.6rem;
  --border-radius-xxs: 0.3rem;
  --border-radius-xs: 0.5rem;
  --border-radius-s: 0.6rem;
  --border-radius-m: 1.2rem;
  --border-radius-l: 1.5rem;
  --border-radius-xl: 10rem;
  --padding-layout: 0 10%;
  --padding-search-bar-items: 2rem 3.2rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: "Kumbh Sans", sans-serif;
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-dark-grey);
}

:root {
  min-height: 100vh;
  background-color: var(--background-color-app);
  overflow: auto;
  transition: 0.2s linear;
}

:root {
  --background-color-app: var(--color-light-grey);
  --background-color-elements: var(--color-white);
  --color-text: var(--color-very-dark-blue);
  --color-checkbox: #e7e8e9;
  --background-color-btn-2: #eeeffc;
  --background-color-btn-2-hover: #c5c9f4;
  --color-btn-2: var(--color-violet);
}

:root .dark-theme {
  --background-color-app: var(--color-midnight);
  --background-color-elements: var(--color-very-dark-blue);
  --color-text: var(--color-white);
  --color-checkbox: #313743;
  --background-color-btn-2: #303642;
  --background-color-btn-2-hover: #696e76;
  --color-btn-2: var(--color-white);
}

header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12.2rem;
  padding: var(--padding-layout);
}

header a {
  line-height: 12.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  padding: var(--padding-layout);
}

footer {
  width: 100%;
  background-color: var(--background-color-elements);
  transition: 0.2s linear;
  padding: var(--padding-layout);
}

h1,
h2,
h3 {
  color: var(--color-text);
  transition: 0.2s linear;
}

h1 {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
}

h2 {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
}

h3 {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
}

h4 {
  font-size: var(--font-size-h4);
  line-height: var(--line-height-h4);
  color: var(--color-violet);
}

button,
input {
  border: none;
  outline: none;
  font-family: inherit;
  background-color: transparent;
}

button {
  cursor: pointer;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.showOnlyOnMobile {
  display: none;
}

@media (max-width: 75em) {
  :root {
    --padding-layout: 0 5%;
    --padding-search-bar-items: 2rem;
  }
}

@media (max-width: 48.12em) {
  :root {
    --padding-search-bar-items: 2.2rem;
    --border-radius-xl: 0;
  }

  .hideOnMobile {
    display: none;
  }

  .showOnlyOnMobile {
    display: block;
  }
}

/* Backdrop: */
.backdrop {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

/* Button: */

.button {
  font-size: var(--font-size-body);
  font-weight: 700;
  border-radius: var(--border-radius-xs);
  padding: 1.6rem;
  text-transform: capitalize;
  transition: 0.2s linear;
}

.buttonPrimary {
  color: var(--color-white);
  background-color: var(--color-violet);
}

.buttonSecondary {
  color: var(--color-btn-2);
  background-color: var(--background-color-btn-2);
}

@media (hover: hover) {
  .buttonPrimary:hover {
    background-color: var(--color-light-violet);
  }
  .buttonSecondary:hover {
    background-color: var(--background-color-btn-2-hover);
  }
}

/* Checkbox: */

.checkboxLabel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: var(--padding-search-bar-items);
  font-size: var(--font-size-body);
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;
  text-transform: capitalize;
}

.checkboxDefaultInput {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkboxCustomInput {
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;
  background-color: var(--color-checkbox);
  border-radius: var(--border-radius-xxs);
  position: relative;
  transition: 0.2s linear;
}

@media (hover: hover) {
  .checkboxCustomInput:hover,
  .checkboxLabel:hover .checkboxCustomInput {
    background-color: #d5d8f7;
  }
}

.checkboxCustomInput:active,
.checkboxLabel:active .checkboxCustomInput {
  transform: scale(0.8);
}

.checkboxDefaultInput:checked ~ .checkboxCustomInput {
  background-color: var(--color-violet);
  border-radius: var(--border-radius-xxs);
}

.checkboxDefaultInput:checked ~ .checkboxCustomInput::after {
  content: "";
  display: block;
  width: 1.2rem;
  height: 0.6rem;
  border-left: 0.2rem solid var(--color-white);
  border-bottom: 0.2rem solid var(--color-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%) rotate(-45deg);
}

/* Input: */

.inputLabel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: var(--padding-search-bar-items);
  min-width: 20rem;
}

.inputLabel[for="filterByInfos"] {
  flex-grow: 3;
}

.inputLabel[for="filterByLocation"] {
  flex-grow: 1;
}

.inputField {
  flex-grow: 1;
  font-size: var(--font-size-body);
  color: var(--color-text);
  padding: 1rem;
  border-radius: var(--border-radius-xs);
  overflow: hidden;
}

.inputField::placeholder {
  color: #8c8f96;
}

@media (max-width: 48.12em) {
  .inputLabel {
    padding: 0;
    min-width: 12rem;
  }
}

/* Company header: */

.companyHeader {
  width: min(80rem, 100%);
  display: flex;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  overflow: hidden;
  transition: 0.2s linear;
}

.companyHeaderInfos {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
}

.companyHeaderInfos h2 {
  margin-bottom: 0.8rem;
}

@media (max-width: 48.12em) {
  .companyHeader {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .companyHeaderInfos {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
    padding-top: 6.5rem;
  }
}

/* Company logo: */

.companyLogo {
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.companyLogoSmall {
  width: 5rem;
  height: 5rem;
  border-radius: var(--border-radius-l);
  margin-bottom: 2.2rem;
}

.companyLogoBig {
  width: 14rem;
}

.companyLogoBig img {
  width: 58%;
}

@media (max-width: 48.12em) {
  .companyLogoBig {
    width: 8rem;
    height: 8rem;
    border-radius: var(--border-radius-l);
    position: absolute;
    transform: translateY(-50%);
  }
}

/* Job Card: */
.jobCard {
  padding: 1rem 3.2rem 3.2rem;
  position: relative;
  opacity: 1;
}

.jobCard::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3.5rem);
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  transition: 0.2s linear;
}

.jobCard > * {
  position: relative;
}

.jobCardPosition {
  padding: 1.2rem 0;
}

.jobCardPosition:hover {
  color: var(--color-dark-grey);
}

.jobCardLocation {
  padding-top: 4rem;
}

/* Job Description: */

.jobDescription {
  width: min(80rem, 100%);
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  padding: 4.8rem;
  margin-top: 3rem;
  gap: 4rem;
  transition: 0.2s linear;
}

.jobDescriptionDetails {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.jobDescriptionPosition {
  padding: 0.8rem 0;
}

.jobDescription h3 {
  margin-bottom: 2rem;
}

.jobDescription ul,
.jobDescription ol {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.jobDescription ul li,
.jobDescription ol li {
  display: flex;
  position: relative;
}

.jobItemsDots,
.jobItemsNumbers {
  position: relative;
  display: inline-block;
  flex: 0 0 3rem;
}

.jobItemsNumbers {
  color: var(--color-violet);
  font-weight: 700;
}

.jobItemsDots::after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  left: 0;
  top: 1rem;
  border-radius: 100%;
  background-color: var(--color-dark-grey);
}

@media (max-width: 48.12em) {
  .jobDescription {
    padding: 3rem;
  }

  .jobDescription button {
    width: 100%;
  }

  .jobDescriptionDetails {
    flex-direction: column;
    align-items: stretch;
    gap: 6rem;
  }
}

/* Job Infos: */

.jobInfos {
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
}

.jobInfosDivider {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 100%;
  background-color: var(--color-dark-grey);
}

/* Jobs List: */

.jobsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 8rem 0 0;
  width: 100%;
}

@media (max-width: 75em) {
  .jobsGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 48.12em) {
  .jobsGrid {
    grid-template-columns: 1fr;
    padding-top: 4rem;
  }
}

/* Not found bar: */

.notFoundBar {
  width: 100%;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  padding: 4rem;
  transition: 0.2s linear;
  text-align: center;
}

/* Search bar: */

.searchBarContainer {
  width: 100%;
  position: relative;
}

.searchBar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  padding-right: 1.6rem;
  transition: 0.2s linear;
}

.searchBarMoreInfos {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 10%);
  z-index: 3;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  transform: translate(-50%, -50%);
}

.searchBarMoreInfos label:first-child::after {
  content: "";
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  height: 0.1rem;
  width: 100%;
  background-color: var(--color-dark-grey);
  opacity: 0.2;
}

.searchBarMoreInfos label {
  padding: var(--padding-search-bar-items);
}

.searchBarMoreInfos div {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 0 var(--padding-search-bar-items) var(--padding-search-bar-items);
}

@media (max-width: 75em) {
  .searchBar > *,
  .searchBarMoreInfos > * {
    flex-shrink: 1;
  }
}

@media (max-width: 48.12em) {
  .searchBar {
    padding: 1.2rem;
    gap: 0.6rem;
  }

  .searchBar > label:first-child::after {
    display: none;
  }

  .searchBar > label:first-child img {
    display: none;
  }
}

/* Background SVG: */

.backSVGContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16rem;
  border-radius: 0 0 0 var(--border-radius-xl);
  background-image: url("./assets/desktop/bg-pattern-header.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 48.12em) {
  .backSVGContainer {
    background-image: url("./assets/mobile/bg-pattern-header.svg");
  }
}

/* Toggle: */

.toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
}

.toggleButton {
  width: 4.8rem;
  height: 2.4rem;
  border-radius: var(--border-radius-m);
  position: relative;
  background-color: var(--color-white);
  transition: 0.2s linear;
}

.toggleButton:active {
  transform: scale(0.9);
}

.toggleButton::before {
  content: "";
  display: absolute;
  width: 1.4rem;
  height: 1.4rem;
  background-color: var(--color-violet);
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  transition: 0.2s linear;
}

.toggleButton[data-active-theme="light"]::before {
  transform: translateY(-50%) translateX(0);
}

.toggleButton[data-active-theme="dark"]::before {
  transform: translateY(-50%) translateX(165%);
}

@media (hover: hover) {
  .toggleButton:hover::before {
    background-color: var(--color-light-violet);
  }
}

/* Job bottom banner - Footer: */

.jobBottomBanner {
  box-sizing: content-box;
  width: min(80rem, 100%);
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  margin: 8rem auto 0;
}

@media (max-width: 48.12em) {
  .jobBottomBanner {
    flex-direction: column;
    align-items: stretch;
  }

  .jobBottomBanner button {
    width: 100%;
  }

  .jobDescription {
    display: none;
  }
}

@media (max-width: 48.12em) {
  :root {
    --padding-search-bar-items: 2.2rem;
    --border-radius-xl: 0;
  }

  .hideOnMobile {
    display: none;
  }

  .showOnlyOnMobile {
    display: block;
  }
}
`