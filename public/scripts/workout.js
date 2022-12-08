const wIcon = document.querySelectorAll('.workout-icon-wrapper')
const workoutListDiv = document.querySelectorAll('.inside-one-workout')
const close_tab = document.querySelectorAll('.close-tab')
const close_tab_workout = document.querySelectorAll('.workout-close-tab')
const li_element = document.querySelectorAll('li')
//WORKOUT OBJECTS




//Eventlisteners

for(let i = 0; i < wIcon.length; i++){
    wIcon[i].addEventListener('click', (e)=>  {
        openProgram(e)
    })
}

/*for(let i = 0; i < close_tab.length; i++){
    close_tab[i].addEventListener('click', (e)=> {
        closeModal()
        closeWorkoutLists(e)
    })
}*/

/*for(let i = 0; i < close_tab_workout.length; i++){
    close_tab_workout[i].addEventListener('click', (e)=>{
        closeWorkout(e)
        closeModal()
    })
}*/

for(let i = 0; i < li_element.length; i++){
    li_element[i].addEventListener('click',(e) =>{
        classListCheck(e)
    })
}
/*f_lever_hold.addEventListener('click', (e)=> {
    openfLeverHold(e)
})*/

//Functions

/*const openProgram = (i) => {

    console.log(i)
    const modal = document.querySelector('.modal')
    const workoutListDiv = document.querySelectorAll('.inside-one-workout')
    workoutListDiv[i].classList.toggle('selected')
    modal.classList.toggle('active')
    
}*/
const openProgram =(e)=> {    
const modal = document.querySelector('.modal')
    modal.classList.add('active')
    
    const insideOneWorkout = document.querySelector('.inside-one-workout')
    insideOneWorkout.classList.add('selected')
    
    const programList = document.createElement('div')
    programList.classList.add('inside-description')
    
    
    let workoutPrograms = [
        
        {
        text:'upperbody HIIT',
        class:'back-lever',
        name:'upperbody HIIT!',
        img: 'image/workout-images/planche.jpg',
        description: 'back lever is a push skill. you need a lot of strength of the chest and some of serratus anterior. the key is to protruct the scapular. master skin the cat. and learn to use correct muscle when performing tuck-back-lever. I reccomend negative momevement that can be done correctly with current strength at first. then go for progressions. do raises. Then you will have back lever.',
        ulHtml: `
                 <ul>-BASIC-
                     <li>push up</li>
                     <li>dip</li>
                    
                 </ul>
                 <ul>  -NEXT LEVEL-
                     <li>ring dip</li>
                     <li>ring push up</li>
                 </ul>
                 <ul>-BACK LEVER PROGRESSIONS-
                    <li>back lever hold</li>
                    <li>back lever nagative</li>
                    <li>back lever raise</li>
                 </ul>
                 `

    },
    {
        text:'BACK LEVER',
        class:'back-lever',
        name:'lowerbody HIIT!',
        img: 'image/workout-images/planche.jpg',
        description: 'back lever is a push skill. you need a lot of strength of the chest and some of serratus anterior. the key is to protruct the scapular. master skin the cat. and learn to use correct muscle when performing tuck-back-lever. I reccomend negative momevement that can be done correctly with current strength at first. then go for progressions. do raises. Then you will have back lever.',
        ulHtml: `
                 <ul>-BASIC-
                     <li>push up</li>
                     <li>dip</li>
                    
                 </ul>
                 <ul> -NEXT LEVEL-
                     <li>ring dip</li>
                     <li>ring push up</li>
                 </ul>
                 <ul>-BACK LEVER PROGRESSIONS-
                    <li>back lever hold</li>
                    <li>back lever nagative</li>
                    <li>back lever raise</li>
                 </ul>
                 `

    },
    {
        text:'MUSCLE UP',
        class:'back-lever',
        name:'fullbody HIIT!',
        img: 'image/workout-images/frontlever.jpg',
        description: 'back lever is a push skill. you need a lot of strength of the chest and some of serratus anterior. the key is to protruct the scapular. master skin the cat. and learn to use correct muscle when performing tuck-back-lever. I reccomend negative momevement that can be done correctly with current strength at first. then go for progressions. do raises. Then you will have back lever.',
        ulHtml: `
                 <ul>-BASIC-
                     <li>push up</li>
                     <li>dip</li>
                    
                 </ul>
                 <ul> -NEXT LEVEL-
                     <li>ring dip</li>
                     <li>ring push up</li>
                 </ul>
                 <ul>progressions
                    <li>back lever hold</li>
                    <li>back lever nagative</li>
                    <li>back lever raise</li>
                 </ul>
                 `

    },
     {
        text:'upper body',
        class:'back-lever',
        name:'upper body',
        img: 'image/workout-images/planche.jpg',
        description: `Upper-body routine!!. 
                      All the sets are performed as supersets. 
                      Depends on how many sets you perform.
                       You can vary this routine time  from about 15 min to 60 min. 
                       Since the workouts does not use any weight(bodyweight only).
                        I am showing some of progressions of excersises. 
                        NOTE I didn't include abs training in this routine. 
                        Rpe 10 means that you perform these exsercise till you get complietly fatigue. 
                        When you think this is the last rep you can do, 
                        just force you to do 3 more reps(sometimes even more than 5 reps). 
                        That feeling is rpe 10
                        <br>
                        take a rest after finishing 2 exercise
                        <br><br>
                        rest time 1:00 - 1:30<br>
                        rep range 1-3 sets of 6 - 20 reps`,
        ulHtml: `



                 <ul>No.1 
                     <li>-wide pullup / bodyrow</li>
                     <li>-ring pushup</li>
                 </ul>
                 <ul> No.2
                     <li>-chin up</li>
                     <li>-ring dip</li>
                     
                 </ul>
                 <ul>No.3
                    <li>-pike pushup</li>
                    <li>-reardelt row</li>
                    
                 </ul>
                  <ul> No.4
                     <li>-bicep curl</li>
                     <li>-tiger pushup</li>
                     
                 </ul>
                 <ul>No.5 perfect form of 2 sets of 10 reps.
                    <li>-face pull</li>
                    <li>-sword raise</li>
                     </ul>

                     
                 `

    },

    {
          
        name:'now we are preparing for this program',
        img:'',
        descripion:'COMING SOOOOONNNNN!!',
        ulHtml:
        `
        <ul>
            coming soon       
                  
               </ul>
        `
  },
    

    
]


let name, img, description, ulHtml
for(let i = 0; i < workoutPrograms.length; i++){
     if(e.target.textContent.includes(workoutPrograms[i].text)){
     name = workoutPrograms[i].name
     img = workoutPrograms[i].img
     description = workoutPrograms[i].description
     ulHtml = workoutPrograms[i].ulHtml
} 
// else needed
}



   
  
    const programHtml = `
    
                                <h3 class="inside-header">${name}</h3>

                                <img src="${img}" class="skill-img">
                                    <p>${description}
                                    </p>
                                </div>
                            <div class="workout-lists-div">

                                ${ulHtml}
                                 <span class="close-tab">&times;</span>
                            `
programList.innerHTML = programHtml



const insideIcon = document.querySelector('.inside-one-workout')
insideIcon.append(programList)

const close_tab = programList.querySelector('.close-tab')
close_tab.addEventListener('click', (e)=>{
    closeModal()
    closeWorkoutLists(e, programList)
})

const li_elements = programList.querySelectorAll('li')
for(let i = 0; i < li_elements.length; i++){
    let li = li_elements[i]
    li.addEventListener('click', (e)=>{
        classListCheck(e)
    })
}

}



//close open functions
const closeModal =()=> {
    
    const modal = document.querySelector('.modal')
    modal.classList.remove('active')
    
}

const closeWorkoutLists =(e, programList)=> {
    e.target.parentElement.parentElement.parentElement.classList.remove('selected')
    programList.remove()
}

const openfLeverHold =(e)=>{
    e.target.parentElement.parentElement.classList.remove('selected')
    const workout_modal = document.querySelector('.workout')
    workout_modal.classList.add('active')

}

const closeWorkout = (e, workout)=>{
    e.target.parentElement.parentElement.classList.remove('active')
    workout.remove()
}


//APPEND METHOD

const classListCheck =(e)=> {

    if(e.target.classList.contains('nav')){
        return
    }
     let workout = document.createElement(('div'))
     workout.classList.add('workout', 'active')
     
     const workout_wrapper = document.querySelector('.workout-wrapper')
     let $name, $video, $intensity, $description, $reps, $restTime
     const insideWorkout = [

     {
        text:'wide pullup',
        name:'WIDE PULLUP(HOLLOW BODY)+ BODY ROW!',
        video:'<source src="image/workout-images/bodyrow_widepullup.mp4">',
        
        description: 'Hollow body wide pull up. As you go up open your chest, in other words fully retract the scapulars. Your main goal is to touch the pullup bar with your chest. Don\'t worry, even if you can\'t gradually you will get stronger. The most important thing is that to know if you can do this excersise correctly. If you can\'t retract your scapular at the top position. I encorage you to perform bodyrows. ',
        reps: '8-20',
        restTime: '0',


     },
     {
        text:'ring pushup',
        name:'RING PUSHUP(ARCHER/REGULAR)!',
        video:'<source src="image/workout-images/ringpshup.mp4">',
        
        description: 'regular ring pushup itself can be a great contribution for chest hypertrophy. When you have enough strength then try archer variation. We can have great opportunity to gain only by training with bodyweight!! ',
        reps: '8-20',
        restTime: '3:30 min',


     },

     
     {
        text:'chin up',
        name:'CHIN UP!',
        video:'<source src="image/workout-images/chinup.mp4">',
        
        description: `Chin up is easier than doing 
                      regular pull ups because of greater activation of biceps.
                       This is good, since we want to grow bicep! 
                       In the video, I am showing regular chinup and bicep focused chinup. Its up to you which one to choose. 
                       However, once you choose the excersise you should stick to the one that you have choosen
                       `,
        reps: '99 sec',
        restTime: '3:30 min',


     },
     {
        text:'ring dip',
        name:'RING DIP(REGULAR/BULGARIAN)!',
        video:'<source src="image/workout-images/ringdip.mp4">',
        
        description: `Regular dip can contribute for tricep and chest growth, 
                      whereas bularian dip has greater opportunity for chest growth
                      you pick one and stick with it for a while(about 4month)`,
        reps: '6 - 15 reps',
        restTime: '1:00 - 1:30 after supersets',
     },

     {
        text:'pike pushup',
        name:'pike pushup!',
        video:'<source src="image/workout-images/pikepush.mp4">',
       
        description: `pike push up is a good alternative for overhead press with weights.
                      I am leaning little bit too forward because I want front delt gain.
                      start from the ground, when you get stronger elevate feet on some object.
                      At last you will be able to perform handstand pushup!!         
        `,
        reps: 'depends',
        restTime: '1:00 - 1:30 after supersets',
     },

     {
        text:'reardelt row',
        name:'REARDELT ROW!',
        video:'<source src="image/workout-images/reardeltrow.mp4">',
        
        description: `
                      The important thing to remenber is, this is not a upright row. 
                      The thumbs are higher than elbows. Pull with elbows, retract scapulars!
                      The more horizontal you get, the higher the intensity of the exercise gets!`,
        reps: '',
        restTime: '',
     },

     {
        text:'bicep curl',
        name:'BICEP CURL!',
        video:'<source src="image/workout-images/bicepcurl.mp4">',
       
        description: 
        `
        This is bicep curl with bodyweight. Full extension at the bottom, FULL contracrtion at the top!!
        The more horizontal you get, the higher the intensity of the exercise gets!
        even
        `,
        reps: '',
        restTime: '',
     },
     {
        text:'tiger pushup',
        name:'TIGER PUSHUP!',
        video:'<source src="image/workout-images/Tigerpushup.mp4">',
        intensity: '',
        description: `
        This is a useful exercise that you can do anywhere on the ground.
        Focus on full extension (sqweeze it out the tricep!!) for mid-head of your tricep!
        `,
        reps: '',
        restTime: '',
     },
     {
        text:'face pull',
        name:'FACE PULL!',
        video:'<source src="image/workout-images/facepull.mp4">',
        intensity: '',
        description: `
        Corrective!!<br>
        This is the most important exercise to include.
        Pull with thumbs NOT WITH ELBOWS!! 
        Pose for 2-3 seconds. 
        Then pull strongly as you slide up arms. Pose for 2-3 seconds at the top. Feel the lower trap.

        If you are suffering for shoulder pain that is probably because you don't have
        strength on rotator cuff!! This exersise will strengthen your external rotator cuff.
        try this for a month and 
        `,
        reps: '',
        restTime: '',
     },
     {
        text:'sword raise',
        name:'SWORD RAISE!',
        video:'<source src="image/workout-images/swordraise.mp4">',
        intensity: '',
        description: `
        I wanted to include this workout Because with this exercise 
        I healed my shoulder impingement. `,
        reps: '',
        restTime: '',
     },

    ]
  for(let i = 0; i < insideWorkout.length; i++){
    if(e.target.textContent.includes(insideWorkout[i].text)){

        $name = insideWorkout[i].name
        $video = insideWorkout[i].video
        $description = insideWorkout[i].description
        // $intensity = insideWorkout[i].intensity
        // $reps = insideWorkout[i].reps
        // $restTime = insideWorkout[i].restTime
        
        
    
        }
     
    }

     const workoutHtml = `
     <h3 class="inside-header">${$name} </h3>
                      <video width ="700px" height="300px" controls>
                      ${$video}
                      </video>
                    <div class="workout-description">
                        <table>
                            
                            <tr>
                                <td>description:</td>
                                <td class="description">${$description}
                                </td>
                            </tr>
                            

                        </table>
                    
                         <span class=" workout-close-tab">&times;</span>
         
    `
    workout.innerHTML = workoutHtml
   

   
   const workout_close_tab = workout.querySelector('.workout-close-tab')
   workout_close_tab.addEventListener('click', (e)=>{
    closeWorkout(e, workout)       
   })
   workout_wrapper.append(workout)

}
 const mm = Math.random()
console.log(Math.floor((mm * 10)+1))
console.log(mm * 10)