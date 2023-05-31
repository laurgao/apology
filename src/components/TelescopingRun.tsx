import { createContext, useEffect, useState } from 'react';
import TContent from './TelescopingContent';
import TPrompt from './TelescopingPrompt';
import TTitle from './TelescopingTitle';

export const telescopingStatesContext = createContext({});
// true means open, false means closed

export default function TelescopingRun() {
    const [telescopingStates, setTelescopingStates] = useState({});
    useEffect(() => {
        // set body to be bg-stone-700
        document.body.classList.add("bg-amber-100");
        return () => {
            document.body.classList.remove("bg-amber-100");
        }
    }, [])

    return (
        <telescopingStatesContext.Provider value={{ telescopingStates, setTelescopingStates }}>
            <div className="text-xl text-stone-700 max-w-2xl mx-auto px-4 my-48 prose">
                <TTitle><h1 className="font-bold text-4xl">my dearest naman,</h1></TTitle>
                <p>
                    i <TPrompt tkey="fucked up">fucked up</TPrompt>.{" "}
                    <TContent tkey="fucked up">
                        <p>i <TPrompt tkey="i hurt you">hurt</TPrompt> you.</p>
                    </TContent>
                    <TContent tkey="i hurt you">
                        <p>
                            i <TPrompt tkey="hurt1">hurt</TPrompt> you.
                            <TContent tkey="hurt1">
                                you are <TPrompt tkey="hurting">hurting</TPrompt> now, and it's my fault. naman, whom i've never loved anyone else the same way.
                            </TContent>
                        </p>
                        <TContent tkey="hurting">
                            let me know if there’s anything i can do, please please please i am open to talking about any aspect of it, i want to know how the hurt feels and what bothers you <TPrompt tkey="and---">and--</TPrompt>
                        </TContent>
                        <TContent tkey="and---">
                            <p>you made it clear to me that our <TPrompt tkey="agreement">agreement</TPrompt> is important to you. trust is important in a relationship.</p>
                            <TContent tkey="agreement">
                                <p>you forgave me quickly. monogamy is important to you, and you were <TPrompt tkey="willing">willing</TPrompt> to compromise for me.</p>
                                <TContent tkey="willing">
                                    <p>you gave me a second chance, and i repaid it by shoving it immediately up your <TPrompt tkey="ass">ass</TPrompt>.</p>
                                    <TContent tkey="ass">
                                        <p>if i was naman, would i <TPrompt tkey="myself">take myself</TPrompt> back?</p>
                                        <TContent tkey="myself">
                                            <p>i already made it clear once is okay repeated is not. i already made it clear that trust is rlly important to me, and you continued to break it, *willingly*. even after u realized u fucked up, u did it again. based on previous actions, there is good chance you'll break a <TPrompt tkey="promise">promise</TPrompt> in the future, and that would hurt after i cared about u so much.</p>
                                            <TContent tkey="promise">
                                                <p>if i were you, would i take myself back? i don't know. seems like, very possibly <TPrompt tkey="no">no</TPrompt>.</p>
                                            </TContent>
                                        </TContent>
                                    </TContent>
                                </TContent>
                            </TContent>
                        </TContent>
                        <br />
                    </TContent>

                    {" "}
                    i accept <TPrompt tkey="responsibility">full responsibility</TPrompt>.{" "}
                    <TContent tkey="responsibility">
                        <p>
                            i <TPrompt tkey="broke">broke</TPrompt> your trust.{" "}
                            <TContent tkey="broke"><TPrompt tkey="twice">twice.</TPrompt></TContent>
                        </p>
                        <TContent tkey="twice">
                            <p>the second one bothers me.</p>
                            <p>i told you i don’t want to hurt you. i won’t do it again. less than 30 hours later, <TPrompt tkey="again">it happened again.</TPrompt></p>
                        </TContent>
                        <TContent tkey="again">
                            <p>this time, i was <TPrompt tkey="explicitly aware">explicitly aware</TPrompt> that i'm hurting you.</p>

                            <TContent tkey="explicitly aware">

                                {/* <p>the morning after you told me you were hurt, i told uli,</p>

                  <blockquote>i think that i still retroactively endorse yesterday and everything that has happened so far, but i wouldnt retroactively endorse anything that keeps happening. (what changed: <i>explicit</i> awareness that this is breaching an agreement, poly is <i>consensual</i> non monogamy)</blockquote> */}
                                <p>this time, i have <TPrompt tkey="zero excuses">zero excuses</TPrompt>.</p>

                                <TContent tkey="zero excuses">

                                    <p>somewhere in the back of my mind, i knew that hurting you really fucking badly was a possibility somewhere. but i didnt want to believe it. <TPrompt tkey="ignore">i chose to ignore it.</TPrompt></p>
                                    {/* the lesson */}
                                    {/* <TContent tkey="ignore">
                      <Lesson>
                        Motivated reasoning really clouds judgement. Oxytocin is maybe just as much of an impairment on "consent" as drugs.

                        I told myself:
                        - it was gradual escalation and at each time it was just a little bit worse than before, so surely it was fine
                        - i'm learning and now there is a significantly reduced chance that i do smtn i dont want to w u

                        No. Those are excuses. I told my partner I wouldn't, and I did. It's simple. It's wrong.
                      </Lesson>
                    </TContent> */}
                                    <p></p>
                                </TContent>
                            </TContent>

                            <br />
                            <p>it scares me that <TPrompt tkey="trust">you can’t trust</TPrompt> my words anymore. <i>i</i> can’t trust my words anymore.</p>
                            <TContent tkey="trust">
                                <p>breaking a promise <TPrompt tkey="twice2">twice</TPrompt> is really fucking bad because it indicates a pattern, i know. it’s bad.</p>
                                <TContent tkey="twice2">
                                    {/* nutshell the consent post or second screen or popup */}
                                    <p>
                                        i've let others crush my sexual boundaries in the past, and i was focused on not making that mistake. the first time, i didnt rlly think about what feels right to naman. the first time, i didn’t realize i’m hurting you, i realized after, when i texted you, and you told me you’re hurt and processing.
                                    </p>
                                    <p>
                                        i got my boundaries fucked with badly enough in the past that i kinda lost a sense of boundaries. for those fateful moments, i forgot that boundaries other than mine exist.
                                    </p>
                                    <p>
                                        the first time was genuine ignorance. yeah, this is stupid, this was a laura stupidity error i couldve prevented bc we did agree on it i just forgot / didn't think of it at that time. ignorance is not an excuse. i still see this as a <TPrompt tkey="laura-fuckup">laura-fuckup</TPrompt> but not as a "i intentionally broke your trust" fuckup.
                                    </p>
                                    <TContent tkey="laura-fuckup">
                                        <p>in conclusion, my fuckups where:</p>
                                        <p>1. forgetting</p>
                                        <p>2. letting things gradually escalate and not cutting it off bc it *felt better* and motivatedly reasoning that naman will be fine with this</p>
                                        {/* optional: nutshell or second screen of excuses i told myself */}
                                        <p>these led to breaking a promise to you. twice. </p>
                                        <p>i want to be clear about, i think that is what i did wrong. i take responsibility for these, but nothing that i didn't do. i never lied to you. i didn’t intend to hide anything. i did smtn while explicitly knowing it'd hurt you once. if you disagree, please tell me.</p>
                                        {/* nutshell of everything is true, pls tell me if u disagree w anything here. */}
                                        {/* i do recognize that "i forgor" / "i was only vaguely implicitly aware" is an outrageous claim and if i was receiving this, idk if id believe it either. if you're skeptical, this is fine, just please let me know */}
                                    </TContent>
                                </TContent>

                            </TContent>

                            {/* bold words for smeone who supposedly values integrity. lesson learnt: i can fail. */}
                        </TContent>
                        <br />
                        <br />
                    </TContent>


                    i made one of the <TPrompt tkey="biggest fuckups">biggest mistakes</TPrompt> in my life.{" "}

                    <TContent tkey="biggest fuckups">
                        <p>i <TPrompt tkey="lost">lost</TPrompt> something big that day. i lost <TPrompt tkey="blessings">one of the most wonderful blessings</TPrompt> the universe has gifted me. and it’s completely my fault.</p>

                        <TContent tkey="lost">
                            <p>i lost it, for what? for someone that i wouldn’t date, much less see myself in a long-term relationship with?</p>

                            {/* <p>i broke your trust twice, the second time being explicitly aware that i’m hurting you. i lost one of the best things that’s happened to me in the past year, and i deserve it.
                </p> */}
                        </TContent>

                        <TContent tkey="blessings">
                            <p>
                                to this day, naman, you are the only person <TPrompt tkey="i can see">i can see myself</TPrompt> staying together with as a life partner. <TContent tkey="i can see">i <TPrompt tkey="saw">saw</TPrompt> it</TContent>. <TContent tkey="saw">i <TPrompt tkey="thank you healthy">feel</TPrompt> this about you, <TPrompt tkey="orders of magnitude">orders of magnitude</TPrompt> more confidently than i’ve felt about anyone else.</TContent><TContent tkey="thank you healthy"> <TPrompt tkey="thank you">thank you</TPrompt> for showing me what a healthy relationship feels like.</TContent>
                            </p>

                            <p>
                                <TContent tkey="thank you">how could i have let myself destroy so much with one mistake?</TContent>
                            </p>
                            <p>
                                <TContent tkey="orders of magnitude">
                                    <TPrompt tkey="next">your next partner</TPrompt> will be one of the luckiest people.
                                </TContent>
                            </p>
                            <p>
                                <TContent tkey="next">
                                    i hope this hurt doesn’t make you more insecure in your future relationships. if there’s anything i can do to help with this, please, please let me. i would hate it if this causes some trauma for you in the long term.
                                </TContent>
                            </p>
                        </TContent>
                        <p><br />this is, no question, one of the top 3 stupidest laura choices. this might even be #1.</p>
                        <br />
                    </TContent>
                    i'm <TPrompt tkey="learning">learning</TPrompt>.
                </p>
                <TContent tkey="learning">
                    <p>some lessons:</p>

                    <iframe
                        src="https://typefully.com/t/STmqAGX"
                        title="lessons"
                        style={{ width: '100%', height: '800px', }}
                        className="my-16 shadow-2xl shadow-amber-200 rounded-md"
                    />
                    <p>
                        there is a way in which, that night i said "i don't want to hurt you. i won't do this again" and now, i realize, even at that time it was a half-lie. at that time, i didn't fully believe that, commit to it, comprehend at what scale how bad doing this is. i realize this now, because, i think now i do. there is a way in which i didn't ask uli to come to the gym with me, because scootering with him with my arms around his neck (to hold on) would feel wrong. there is a way my chest clenches and i feel a cold resolve in my heart that i do not fucking want to cheat again. i don't want to hug or do smtn platonic if i know that this might lead to something more. i don't want it. it feels bad. i did not feel such resolve 2 nights ago. the cold resolve to the point where i'm willing to commit to losing 10k if i break this promise with you again. at this group house, or afterwards.
                    </p>
                    <br />
                </TContent>
                {/* <TContent tkey="learning">
                    <br />
                    <p>i was like, hmmm it’s fine if i learn on him a little bit. Right?</p>

                    <p>it wasn't. <TPrompt tkey="gradual">before i knew it</TPrompt>, an arm around me, my arm across his chest, our thighs touch and he's dry humping my legs.</p>
                    <TContent tkey="gradual">
                        <Lesson>
                            <p>Cut off the possibility of escalation from the get-go.</p>

                            <p>Avoid things that go wrong on autopilot, as Nate Soares said in <i>Replacing Guilt</i>.</p>
                            <p>Last night, I turned down a hug.
                            </p></Lesson>
                    </TContent>
                </TContent> */}
                <p>you were everything I can ask for, <TPrompt tkey="i don't love you less">and more</TPrompt>.</p>
                <TContent tkey="i don't love you less">
                    <p>
                        {/* <TContent tkey="thank you"> */}
                        thank you for showing me how it feels <TPrompt tkey="thank you2">to</TPrompt> feel safe. <TContent tkey="thank you2"><TPrompt tkey="thank you3">to</TPrompt> feel at <TPrompt tkey="home">home</TPrompt><TContent tkey="home">, my heart melting when you told me, if you aren't ready to have unshaking faith in yourself, i will</TContent>. </TContent><TContent tkey="thank you3"><TPrompt tkey="thank you4">to</TPrompt> love, truly, with all my heart.</TContent><TContent tkey="thank you4"> <TPrompt tkey="thank you5">to</TPrompt> want someone else badly, desiring you was when i realized, for sure this time, that i’m not asexual.</TContent> <TContent tkey="thank you5"><TPrompt tkey="sorry">to</TPrompt> see a possibility of long-term.</TContent>
                        {/* </TContent> */}
                    </p>
                    <TContent tkey="sorry">
                        <p>
                            i'm sorry. i'm <TPrompt tkey='so sorry'>so sorry</TPrompt>.
                        </p>
                    </TContent>
                    <TContent tkey="so sorry">
                        <p>
                            i want to emphasize liking other people doesn’t mean i love you less. i love you just as much as i’ve always had. you were amazing. you were a stone pillar of emotional comfort. you were everything i could ask for, and more. i really want you to <TPrompt tkey="future">know</TPrompt> this.
                        </p>
                    </TContent>
                    {/* this was a great run. thanks again for showing me what a healthy relationship feels like. you know how much this means to me, after [previous relationship where i didnt feel safe and didn’t recognize that i didn’t], because of you i’m pretty sure i’ll be able to avoid that in the future. */}
                    <TContent tkey="future"><p>
                        i wish the <a></a>best for your future, with or without me. i love you. i think part of me{" "}
                        <TPrompt tkey="sincerely" onClick={() => {
                            document.body.classList.add("bg-stone-200")
                        }}>always will</TPrompt>.
                    </p></TContent>
                    <TContent tkey='sincerely'>
                        <p>
                            sincerely,
                        </p>
                        <img src="/laura-signature.png" width={200}></img>
                        <p>
                            your (ex?-)partner,<br />
                            laura
                        </p>
                        <div className='text-base mt-24'>
                            <p>
                                <TPrompt tkey='ps'>PS.</TPrompt>{" "}
                                <TContent tkey='ps'>i think everything here is true. i do recognize that "i forgor" / "i was only vaguely implicitly aware" is an outrageous claim and if i was receiving this, idk if id believe it either. if you're skeptical, this is fine, <TPrompt tkey="plslmk">just please let me know</TPrompt>.</TContent>
                            </p>
                            <p>
                                <TContent tkey="plslmk">
                                    please i hope ur honest to me abt ur feelings. idk i wont ask you to stay w me but this my one request. i want to know your thoughts rn. how do you feel reading rn this?
                                    {/* <p>
                                        ex:
                                        <ul>
                                            <li>you worked on this for 10 hours and this is the best you can come up with?</li>
                                            <li>i can see you're trying to improve yourself and i admire this, but you have pretty much fucked up my trust beyond repair</li>
                                            <li>you seem like you're trying to divert responsibility by mentioning your past relationship trauma</li>
                                        </ul>
                                    </p> */}
                                    {/* outrageous hyperbolic negative reactions seem bad tbh */}
                                    <p>tell meeeeeeee</p>
                                    {/* <p>PPS</p> */}
                                </TContent>
                            </p>
                        </div>
                    </TContent>

                </TContent>
                {/* <p>you were everything I can ask for, and more.</p> */}
            </div >
        </telescopingStatesContext.Provider >
    )
}