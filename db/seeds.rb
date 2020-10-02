course = Course.create(title: 'Hello world', description: 'Create a react ap with ruby on rails')
sectionn = Sectionn.create(title: 'Chapter 1', course: course)

episodes = Episode.create([
    {title: '1. Setup up new ruby on rails project', description: 'Lorem ipusm', url: 'https://www.youtube.com/embed/HrF8Op5MiTc', sectionn: sectionn },
    {title: '2. Scaffold first medels', description: 'Lorem ipusm', url: 'https://www.youtube.com/embed/HrF8Op5MiTc', sectionn: sectionn },
    {title: '3. Style views', description: 'Lorem ipusm', url: 'https://www.youtube.com/embed/HrF8Op5MiTc', sectionn: sectionn },
    {title: '4. Deploy to heroku', description: 'Lorem ipusm', url: 'https://www.youtube.com/embed/HrF8Op5MiTc', sectionn: sectionn },
])
