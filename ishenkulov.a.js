//Nodejs test

//Реализовать класс, который имеет следующие методы:

// - Получение шага по id. Метод возвращает объект шага {id, title, kind, options, ref} либо null если не найдено
// - Получение следующего шага (по id шага) либо null если не найдено
// - Получение предыдущего шага (по id шага) либо null если не найдено
// - Получение массива id шагов, которые будут исполнены в порядке выполнения. Пример ответа: ['8e9893a6-6930-476e-80d6-cf68a731044a', 'a266540c-5052-4bb5-8ee6-eb455bd1111', '810893a6-6930-476e-80d6-cf68a731044a', '810893a6-6930-476e-70d6-cf68a731044a']
// - Метод, который принимает id шага и возвращает булевое значение по признаку есть ли у шага аудио файл или нет. Празнаком наличия аудио файла, считается строка options.audio.url

const calls = {
  start_step: "8e9893a6-6930-476e-80d6-cf68a731044a",
  steps: [
    {
      id: "8e9893a6-6930-476e-80d6-cf68a731044a",
      title: "Outbound call",
      kind: "outbound_call",
      options: null,
      ref: "a266540c-5052-4bb5-8ee6-eb455bd1111"
    },
    {
      id: "a266540c-5052-4bb5-8ee6-eb455bd1111",
      title: "Play audio",
      kind: "play_audio",
      options: {
        audio: {
          url: "https://company.org/play/audio.mp3"
        }
      },
      ref: "810893a6-6930-476e-80d6-cf68a731044a"
    },
    {
      id: "810893a6-6930-476e-80d6-cf68a731044a",
      title: "Collect input",
      kind: "collect_input",
      options: null,
      ref: "810893a6-6930-476e-70d6-cf68a731044a"
    },
    {
      id: "810893a6-6930-476e-70d6-cf68a731044a",
      title: "Scenario End",
      kind: "scenario_end",
      options: null,
      ref: null
    }
  ]
}
;
class StepClass {
  constructor(obj){
    this.obj = obj;
  };

  //Поиск по id
  findById (id) {
    return this.obj.steps.find(item => item.id === id) || null
  };

  //Вернуть список id
  getStepsArray(){
    return this.obj.steps.map(item => item.id)
  };

  //Проверка на audio
  hasAudioById (id){
    const obj = this.obj.steps.find(item => item.id === id)

    return obj ? obj.options !== null : null
  };

  //Вернуть след шаг 
  getNextStep (id){
    const index = this.obj.steps.findIndex(item => item.id === id);

    if(index < 0){return null}

    return this.obj.steps[index + 1] || null
  };

  //Вернуть предыдущий шаг
  getPrevStep (id){
    const index = this.obj.steps.findIndex(item => item.id === id);

    if(index < 0){return null}

    return this.obj.steps[index - 1] || null
  };
};

const jeff = new StepClass(calls);