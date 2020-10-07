import AbstractView from "./AbstractView.js"; 

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Imprint")
    }

    // Grab server-side data
    async getHtml() {
        return `
        <div id="staticContainer" >
            <h1>More Information</h1>
            <p>No wait, Doc, the bruise, the bruise on your head, I know how that happened, you told me the whole story. you were standing on your toilet and you were hanging a clock, and you fell, and you hit your head on the sink, and that's when you came up with the idea for the flux capacitor, which makes time travel possible. Mom, Dad. Wait a minute, wait a minute. 1:15 in the morning? Science Fiction Theater.

            There, there, now, just relax. You've been asleep for almost nine hours now. you guys look great. Mom, you look so thin. Brown, Brown, Brown, Brown, Brown, great, you're alive. Do you know where 1640 Riverside- you guys look great. Mom, you look so thin. You have this thing hooked up to the car?
            
            What did you sleep in your clothes again last night. Thank you, don't forget to take a flyer. Well, I guess that's everything. Hey McFly, what do you think you're doing. I gotta go, uh, I gotta go. Thanks very much, it was wonderful, you were all great. See you all later, much later.
            
            What, I don't get what happened. Your not gonna be picking a fight, Dad, dad dad daddy-o. You're coming to a rescue, right? Okay, let's go over the plan again. 8:55, where are you gonna be. No, Doc. Calm down, Marty, I didn't disintegrate anything. The molecular structure of Einstein and the car are completely intact. Well, safe and sound, now, n good old 1955.
            
            George, help me, please. Alright, c'mon, I think we're safe. Ohh, no. Who the hell is John F. Kennedy? You do?
            
            I don't worry. this is all wrong. I don't know what it is but when I kiss you, it's like kissing my brother. I guess that doesn't make any sense, does it? Okay. Oh, yeah, yeah. We never would have fallen in love. Precisely.
            
            Alright, take it up, go. Doc. Don't say a word. I'll be at my grandma's. Here, let me give you the number. Bye. Bear with me, Marty, all of your questions will be answered. Roll tape, we'll proceed. Actually, people call me Marty.
            
            Listen, Doc, you know there's something I haven't told you about the night we made that tape. This is uh, this is heavy duty, Doc, this is great. Uh, does it run on regular unleaded gasoline? Good morning, Mom. Who? Don't say a word.
            
            Yeah I know, If you put your mind to it you could accomplish anything. Doc, she's beautiful. She's crazy about me. Look at this, look what she wrote me, Doc. That says it all. Doc, you're my only hope. That's a Florence Nightingale effect. It happens in hospitals when nurses fall in love with their patients. Go to it, kid. Oh, just a little weather experiment. Yeah, I'll keep that in mind.
            
            Hey boy, are you alright? Never mind that, never mind that now, never mind that, never mind- Right, gimme a Pepsi free. Are you sure about this storm? Excuse me.
            
            .<p>
        </div>
        `;
    }
}