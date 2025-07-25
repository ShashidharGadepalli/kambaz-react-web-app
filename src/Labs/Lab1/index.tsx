export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h1>Sasidhar Gadepalli - Web Development summer - 2 2025.</h1>
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
                    This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag  </p>
                <p id="wd-p-2">
                    This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-3">
                    This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
                </p>
                <p id="wd-p-4">
                    This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My Favourite Recipe:
                <h4> Spaghetti </h4>
                <ol id="wd-favourite-recipes">
                    <li>Boil water.</li>
                    <li>Add spaghetti.</li>
                    <li>Cook until al dente.</li>
                    <li>Drain and serve with sauce.</li>
                    <li> add Broccoli and Olives </li>
                    <li> add fresh mozzarella cheese</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id="wd-your-books">
                    <li> Count Dracula</li>
                    <li> The man in the Iron Mask</li>
                    <li> The Hunchback of Notre dam</li>
                    <li> The Three Musketeers</li>
                </ul>



            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>81</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>CSS</td>
                            <td>2/17/21</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>JavaScript</td>
                            <td>2/24/21</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>Javascript</td>
                            <td>3/3/21</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Redux</td>
                            <td>3/10/21</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>Redux</td>
                            <td>3/17/21</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Node</td>
                            <td>3/24/21</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Node</td>
                            <td>3/31/21</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Mongo</td>
                            <td>4/7/21</td>
                            <td>91</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet: Starship Image<br />
                <img id="wd-starship" width="400px" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
                <br />
                Loading a local image: Teslabot Image
                <br />
                <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" /></div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input placeholder="Shashidhar" id="wd-text-fields-username" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" value="123@#$asd" id="wd-text-fields-password" />
                    <br />
                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" placeholder="Doe"
                        value="Gadepalli"
                        title="The last name"
                        id="wd-text-fields-last-name" />
                    {/* copy rest of form elements here  */}
                </form>
            </div>
            <h5>Text boxes</h5>
            <label>Biography:</label><br />
            <textarea id="wd-textarea" cols={30} rows={10}>Donec bibendum sagittis nisi eu euismod. Nullam finibus felis vel lacus posuere, vel congue augue venenatis. Duis aliquam mollis tellus ac ultrices. Nullam dui quam, hendrerit eu mauris ut, gravida accumsan sapien. Sed vel velit lacus. In consequat faucibus diam. Maecenas varius quam lacus, eget sagittis risus viverra ac.

                In malesuada enim a ante laoreet, eu tristique lacus interdum. Aliquam erat volutpat. Pellentesque in accumsan est. Curabitur tellus mauris, ornare at molestie vitae, condimentum in odio. Integer sodales sit amet leo in semper. Nulla ornare enim eget libero dignissim dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eu ligula vitae massa pharetra facilisis. Sed tincidunt at tortor nec vehicula. Morbi vehicula tempus molestie.

                Morbi eu diam a lacus venenatis blandit ut id enim. Pellentesque bibendum et urna at congue. Mauris pellentesque eros non lectus tempus molestie et ac mi. Nulla turpis mi, malesuada nec pharetra eget, facilisis ut diam. Maecenas finibus sollicitudin ultrices. Phasellus feugiat nunc sit amet tellus vestibulum, in porttitor justo mollis. Morbi sagittis sed augue eu pellentesque. Curabitur convallis mauris laoreet mauris aliquet, at pellentesque purus efficitur. Maecenas tempor lobortis lorem non semper. Integer ac imperdiet erat, id vestibulum nibh. Fusce eu lectus sed metus elementum volutpat. Duis est lacus, mollis at suscipit quis, bibendum a dolor. Nulla tempor lacinia ligula, vel porttitor est gravida a.</textarea>

            <h5 id="wd-buttons">Buttons</h5>
            <button type="button"
                onClick={() => alert("Life is Good!")}
                id="wd-all-good">
                Hello World!
            </button>

            <h5 id="wd-radio-buttons">Radio buttons</h5>

            <label htmlFor="wd-file-upload">Upload a file:</label>
            <input type="file" id="wd-file-upload" name="file-upload" /><br />
            <br /><br />

            <label>Favorite movie genre:</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-comedy" />
            <label htmlFor="wd-radio-comedy">Comedy</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-drama" />
            <label htmlFor="wd-radio-drama">Drama</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-scifi" />
            <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
            <label htmlFor="wd-radio-fantasy">Fantasy</label>

            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
            <label htmlFor="wd-chkbox-drama">Drama</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

            <h4 id="wd-dropdowns">Dropdowns</h4>

            <h5>Select one</h5>
            <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
            <select id="wd-select-one-genre">
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>

            <h5>Select many</h5>
            <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
            <select multiple id="wd-select-many-genre">
                <option value="COMEDY" selected> Comedy          </option>
                <option value="DRAMA">           Drama           </option>
                <option value="SCIFI" selected> Science Fiction </option>
                <option value="FANTASY">         Fantasy         </option>
                <option value="ACTION">          Action          </option>
                <option value="ROMANCE">        Romance         </option>
                <option value="THRILLER">       Thriller        </option>
            </select>

            <h4>Other HTML field types</h4>

            <label htmlFor="wd-text-fields-email"> Email: </label>
            <input type="email"
                placeholder="gadepalli.sa@northeatrn.edu"
                id="wd-text-fields-email" /><br />

            <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
            <input type="number"
                placeholder="1000"
                min = "1000"
                max = "100000"
                id="wd-text-fields-salary-start" /><br />

            <label htmlFor="wd-text-fields-rating"> Rating: </label>
            <input type="range"
                max="5"
                placeholder="Doe"
                id="wd-text-fields-rating" /><br />

            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            <input type="date"
                id="wd-text-fields-dob" /><br />

            <h4>Anchor tag</h4>
            Please
            <a href="https://github.com/ShashidharGadepalli" id="wd-github"> click here </a>
            to get github Profile <br />
            Click on this link
            <a href="https://github.com/ShashidharGadepalli/kambaz-react-web-app" id="wd-source-code"> for Source code</a><br />



        </div>
    );
}
