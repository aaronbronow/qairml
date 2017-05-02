# qairml

Questionnaire Markup Language for Surveys and Polls

## Examples

Canonical question labels, numeric answers with canonical values, and numeric range answers

``` yaml
survey:
  name: 'Getting to Know You'
  questions:
  - 'male or female':
      text: 'Are you male or female?'
      answers:
      - 1, 'male'
      - 2, 'female'
  - 'age':
      text: 'How old are you?'
      answers: [18..99]
```

Text question labels, text answers

``` yaml
survey:
  name: 'Voight-Kampff Test'
  questions:
  - 'It''s your birthday. Someone gives you a calfskin wallet. How do you react?':
    answers:
    - 'I wouldn''t accept it.'
    - 'I would appreciate it.'
    - 'Thank you for the wallet.'
  - 'You''ve got a little boy. He shows you his butterfly collection plus the killing jar. What do you do?':
    answers:
    - 'That''s nice, but why don''t you keep the killing jar for yourself?'
    - 'I take him to the doctor.'
    - 'Oh lovely.'
  - 'You''re watching television. Suddenly you realize there''s a wasp crawling on your arm.':
    answers:
    - 'I swat it away.'
    - 'I kill it.'
    - 'I scream, and grab the closest thing near me (Which happens to be a can of sunscreen) And beat the hell out of it.'
  - 'You''re reading a magazine. You come across a full-page nude photo of a girl/guy. You show it to your husband/wife. He/She likes it so much, he/she hangs it on your bedroom wall. The girl/guy is lying on a bearskin rug.':
    answers:
    - 'Whooo?'
    - 'I would take it down.'
    - 'I wouldn''t let him/her.'
  - 'You''re in a desert walking along in the sand when all of the sudden you look down, and you see a tortoise, it''s crawling toward you. You reach down, you flip the tortoise over on it''s back. The tortoise lays on it''s back, it''s belly baking in the hot sun, beating it''s legs trying to turn itself over, but it can''t, not without your help. But you''re not helping. Why is that?':
    answers:
    - 'What do you mean, I''m not helping?'
    - 'What is a tortoise?'
    - 'I don''t know why I would flip a turtle in the first place.'
  - 'Describe in single words, only the good things that come into your mind about your mother.':
    answers:
    - 'Warm voice, cookies.'
    - 'Music. Love. Summer. Sun. Books. Movies. Friends. Laughter.'
    - 'My mother... I''ll tell you about my mother.'
  - 'You become pregnant by a man who runs off with your best friend, and you decide to get an abortion.':
    answers:
    - 'I would never do an abortion.'
    - 'What do you think I do with my boyfriend?'
    - 'Ok, I think there''s a first time for everything.'
  - 'One more question: You''re watching a stage play - a banquet is in progress. The guests are enjoying an appetizer of raw oysters. The entree consists of boiled dog stuffed with rice. The raw oysters are less acceptable to you than a dish of boiled dog.':
    answers:
    - 'I wouldn''t eat boiled dog!'
    - 'Not true.'
    - 'Disgusting!'
```
