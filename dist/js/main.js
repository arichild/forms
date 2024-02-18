$( document ).ready(function() {
  $(function() {
    $('select.ui-input').styler({
    });
  });

  const btnAdd = document.querySelectorAll('.ui-add')
  const mainCal = document.querySelectorAll('.date_timepicker_main')
  const startCal = document.querySelectorAll('.date_timepicker_start')
  const endCal = document.querySelectorAll('.date_timepicker_end')

  if(btnAdd.length) {
    btnAdd.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault()

        const parent = element.closest('.form-field')
        const newId = 'checkbox-' + Math.floor(Math.random() * 1000);
        const child = parent.querySelector('.form-fields') || parent.querySelector('.form-field-input')

        const newInput = child.cloneNode(true);
        const newCheckbox = newInput.querySelector('.ui-checkbox-input')
        const newLabel = newInput.querySelector('.ui-checkbox-label')

        if(newCheckbox) {
          newCheckbox.id = newId
          newCheckbox.name  = newId
          newLabel.setAttribute('for', newId)
        }

        startCal.forEach(element => {
          $(element).datetimepicker('reset')
          $(element).datetimepicker({
            format:'Y.m.d',
            scrollInput: false,
            scrollTime: false,
            scrollMonth: false,
            defaultSelect: false,
            lang: "ru",
            onShow:function( ct ){
              const parent = element.closest('.form-fields')
              const block = element.closest('.form-field-calendar')
              const input = parent.querySelector('.date_timepicker_end')
              const dayMilliseconds = 24*60*60*1000;
              let currentDate  = $(input).datetimepicker('getValue');

              block.classList.add('active')

              if(currentDate) {
                currentDate.setTime(currentDate.getTime() - dayMilliseconds);

               this.setOptions({
                minDate:jQuery(input).val()?currentDate:false
               })
              }
            },
            onClose:function( ct ){
              const block = element.closest('.form-field-calendar')

              block.classList.remove('active')
            },
            timepicker:false
           });
           $.datetimepicker.setLocale("ru");
        });

        endCal.forEach(element => {
          $(element).datetimepicker('reset')
          $(element).datetimepicker({
            format:'Y.m.d',
            scrollInput: false,
            scrollTime: false,
            scrollMonth: false,
            defaultSelect: false,
            lang: "ru",
            onShow:function( ct ){
              const parent = element.closest('.form-fields')
              const block = element.closest('.form-field-calendar')
              const input = parent.querySelector('.date_timepicker_start')
              const dayMilliseconds = 24*60*60*1000;
              let currentDate  = $(input).datetimepicker('getValue');

              block.classList.add('active')

              if(currentDate) {
                currentDate.setTime(currentDate.getTime() - dayMilliseconds);

               this.setOptions({
                minDate:jQuery(input).val()?currentDate:false
               })
              }
            },
            onClose:function( ct ){
              const block = element.closest('.form-field-calendar')

              block.classList.remove('active')
            },
            timepicker:false
           });
           $.datetimepicker.setLocale("ru");
        });

        child.after(newInput);
      })
    });
  }

  const input = document.querySelectorAll('input[type="number"].ui-input');

  input.forEach(element => {
    element.addEventListener('blur', function() {
        if (element.value < 0) {
          element.value = '';
        }
    });
  });

  mainCal.forEach(element => {
    $(element).datetimepicker({
      format: "d.m.Y",
      scrollInput: false,
      scrollTime: false,
      lang: "ru",
      scrollMonth: false,
      defaultSelect: false,
      // opened: true,
      closeOnDateSelect: true,
      yearStart: 1940,
      yearEnd: new Date().getFullYear(),
      dayOfWeekStart: 1,
      maxDate: '-1970/01/02',

      timepicker:false,

      onShow:function( ct ){
        const parent = element.closest('.form-field-calendar')

        parent.classList.add('active')
      },
      onClose:function( ct ){
        const parent = element.closest('.form-field-calendar')

        parent.classList.remove('active')
      },
     });
     $.datetimepicker.setLocale("ru");
  });

  startCal.forEach(element => {
    $(element).datetimepicker({
      format:'d.m.Y',
      scrollInput: false,
      scrollTime: false,
      scrollMonth: false,
      defaultSelect: false,
      lang: "ru",
      onShow:function( ct ){
        const parent = element.closest('.form-fields')
        const block = element.closest('.form-field-calendar')
        const input = parent.querySelector('.date_timepicker_end')
        let currentDate  = $(input).datetimepicker('getValue');

        block.classList.add('active')

        if(currentDate) {
          currentDate.setDate(currentDate.getDate() - 1);

         this.setOptions({
          maxDate:jQuery(input).val()?currentDate:false
         })
        }
      },
      onClose:function( ct ){
        const block = element.closest('.form-field-calendar')

        block.classList.remove('active')
      },
      timepicker:false
     });
     $.datetimepicker.setLocale("ru");
  });

  endCal.forEach(element => {
    $(element).datetimepicker({
      format:'d.m.Y',
      scrollInput: false,
      scrollTime: false,
      scrollMonth: false,
      defaultSelect: false,
      lang: "ru",
      onShow:function( ct ){
        const parent = element.closest('.form-fields')
        const block = element.closest('.form-field-calendar')
        const input = parent.querySelector('.date_timepicker_start')
        let currentDate  = $(input).datetimepicker('getValue');

        block.classList.add('active')

        if(currentDate) {
          currentDate.setDate(currentDate.getDate() + 1);

         this.setOptions({
          minDate:jQuery(input).val()?currentDate:false
         })
        }
      },
      onClose:function( ct ){
        const block = element.closest('.form-field-calendar')

        block.classList.remove('active')
      },
      timepicker:false
     });
     $.datetimepicker.setLocale("ru");
  });
});
