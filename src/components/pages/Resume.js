import React from 'react';

export default function Home() {
    return (
        <div>
            <h1>My Resume</h1>
            <section className='resume'>
                <h1>Education</h1>
                <h4>Liberty University</h4>
                <div className='education'>
                    <p>Master of Science in Sport Management: Sport Administration</p>
                    <p>- May 2022</p>
                </div>
                <div className='education'>
                    <p>Bachelor of Science in Sport Management</p>
                    <p>- May 2020</p>
                </div>
                <h3></h3>
                <h1>Skills</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>

                </ul>
                <h1>Expeirence</h1>
                <div>
                    <p>Legal Assistant - R.A.M. Law Group</p>
                    <p>Riverdale, Georgia</p>
                    <p>June 20 - Present</p>
                    <ul>
                        <li>
                            Insert data information for various types of immigration applications, including interfacing with clients to obtain
                            necessary evidence and other relevant documentation to ensure timely approval of applications
                        </li>
                        <li>
                            Transcribed legal documents and phone conversations
                        </li>
                        <li>Research state and federal statutes, public opinions, and published articles for specific cases</li>
                        <li>Plan and coordinated logistics and materials for attorney/client mediations, litigation, and consultation
                            meetings</li>
                        <li>Scheduled and Manage attorney calendar to ensure timely court appearances and appointments</li>
                    </ul>
                </div>

            </section>
        </div>
    );
}
