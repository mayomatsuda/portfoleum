import Square from "./Square"
import NFT from './NFT';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

const MyPortfolio = ({ portfolioValues, dragHandler, mouseEnterHandler, mouseLeaveHandler, rightClickHandler }) => {

    function screenshot(e){
        e.preventDefault()
        html2canvas(document.querySelector("#capture"), {useCORS: true}).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
              });
            const imgProps= pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('download.pdf');
        });
    }

    return (
        <div>
            <h1>My Portfolio</h1>
            <div id="capture">
                <div className='prow'>
                    <div className='pcol'>
                        {portfolioValues[0][0] === undefined ? (
                            <Square x={0} y={0} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[0][0]['contract']}
                                id={portfolioValues[0][0]['id']}
                                tokenname={portfolioValues[0][0]['tokenname']}
                                tokensymbol={portfolioValues[0][0]['tokensymbol']}
                                url={portfolioValues[0][0]['imageUrl']}
                                pos={portfolioValues[0][0]['pos']}
                                locked={portfolioValues[0][0]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={0}
                                y={0}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[0][1] === undefined ? (
                            <Square x={0} y={1} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[0][1]['contract']}
                                id={portfolioValues[0][1]['id']}
                                tokenname={portfolioValues[0][1]['tokenname']}
                                tokensymbol={portfolioValues[0][1]['tokensymbol']}
                                url={portfolioValues[0][1]['imageUrl']}
                                pos={portfolioValues[0][1]['pos']}
                                locked={portfolioValues[0][1]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={0}
                                y={1}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[0][2] === undefined ? (
                            <Square x={0} y={2} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[0][2]['contract']}
                                id={portfolioValues[0][2]['id']}
                                tokenname={portfolioValues[0][2]['tokenname']}
                                tokensymbol={portfolioValues[0][2]['tokensymbol']}
                                url={portfolioValues[0][2]['imageUrl']}
                                pos={portfolioValues[0][2]['pos']}
                                locked={portfolioValues[0][2]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={0}
                                y={2}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[0][3] === undefined ? (
                            <Square x={0} y={3} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[0][3]['contract']}
                                id={portfolioValues[0][3]['id']}
                                tokenname={portfolioValues[0][3]['tokenname']}
                                tokensymbol={portfolioValues[0][3]['tokensymbol']}
                                url={portfolioValues[0][3]['imageUrl']}
                                pos={portfolioValues[0][3]['pos']}
                                locked={portfolioValues[0][3]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={0}
                                y={3}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[0][4] === undefined ? (
                            <Square x={0} y={4} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[0][4]['contract']}
                                id={portfolioValues[0][4]['id']}
                                tokenname={portfolioValues[0][4]['tokenname']}
                                tokensymbol={portfolioValues[0][4]['tokensymbol']}
                                url={portfolioValues[0][4]['imageUrl']}
                                pos={portfolioValues[0][4]['pos']}
                                locked={portfolioValues[0][4]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={0}
                                y={4}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[0][5] === undefined ? (
                            <Square x={0} y={5} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[0][5]['contract']}
                                id={portfolioValues[0][5]['id']}
                                tokenname={portfolioValues[0][5]['tokenname']}
                                tokensymbol={portfolioValues[0][5]['tokensymbol']}
                                url={portfolioValues[0][5]['imageUrl']}
                                pos={portfolioValues[0][5]['pos']}
                                locked={portfolioValues[0][5]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={0}
                                y={5}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                </div>

                <div className='prow'>
                    <div className='pcol'>
                        {portfolioValues[1][0] === undefined ? (
                            <Square x={1} y={0} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[1][0]['contract']}
                                id={portfolioValues[1][0]['id']}
                                tokenname={portfolioValues[1][0]['tokenname']}
                                tokensymbol={portfolioValues[1][0]['tokensymbol']}
                                url={portfolioValues[1][0]['imageUrl']}
                                pos={portfolioValues[1][0]['pos']}
                                locked={portfolioValues[1][0]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={1}
                                y={0}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[1][1] === undefined ? (
                            <Square x={1} y={1} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[1][1]['contract']}
                                id={portfolioValues[1][1]['id']}
                                tokenname={portfolioValues[1][1]['tokenname']}
                                tokensymbol={portfolioValues[1][1]['tokensymbol']}
                                url={portfolioValues[1][1]['imageUrl']}
                                pos={portfolioValues[1][1]['pos']}
                                locked={portfolioValues[1][1]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={1}
                                y={1}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[1][2] === undefined ? (
                            <Square x={1} y={2} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[1][2]['contract']}
                                id={portfolioValues[1][2]['id']}
                                tokenname={portfolioValues[1][2]['tokenname']}
                                tokensymbol={portfolioValues[1][2]['tokensymbol']}
                                url={portfolioValues[1][2]['imageUrl']}
                                pos={portfolioValues[1][2]['pos']}
                                locked={portfolioValues[1][2]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={1}
                                y={2}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[1][3] === undefined ? (
                            <Square x={1} y={3} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[1][3]['contract']}
                                id={portfolioValues[1][3]['id']}
                                tokenname={portfolioValues[1][3]['tokenname']}
                                tokensymbol={portfolioValues[1][3]['tokensymbol']}
                                url={portfolioValues[1][3]['imageUrl']}
                                pos={portfolioValues[1][3]['pos']}
                                locked={portfolioValues[1][3]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={1}
                                y={3}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[1][4] === undefined ? (
                            <Square x={1} y={4} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[1][4]['contract']}
                                id={portfolioValues[1][4]['id']}
                                tokenname={portfolioValues[1][4]['tokenname']}
                                tokensymbol={portfolioValues[1][4]['tokensymbol']}
                                url={portfolioValues[1][4]['imageUrl']}
                                pos={portfolioValues[1][4]['pos']}
                                locked={portfolioValues[1][4]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={1}
                                y={4}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[1][5] === undefined ? (
                            <Square x={1} y={5} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[1][5]['contract']}
                                id={portfolioValues[1][5]['id']}
                                tokenname={portfolioValues[1][5]['tokenname']}
                                tokensymbol={portfolioValues[1][5]['tokensymbol']}
                                url={portfolioValues[1][5]['imageUrl']}
                                pos={portfolioValues[1][5]['pos']}
                                locked={portfolioValues[1][5]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={1}
                                y={5}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                </div>

                <div className='prow'>
                    <div className='pcol'>
                        {portfolioValues[2][0] === undefined ? (
                            <Square x={2} y={0} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[2][0]['contract']}
                                id={portfolioValues[2][0]['id']}
                                tokenname={portfolioValues[2][0]['tokenname']}
                                tokensymbol={portfolioValues[2][0]['tokensymbol']}
                                url={portfolioValues[2][0]['imageUrl']}
                                pos={portfolioValues[2][0]['pos']}
                                locked={portfolioValues[2][0]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={2}
                                y={0}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[2][1] === undefined ? (
                            <Square x={2} y={1} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[2][1]['contract']}
                                id={portfolioValues[2][1]['id']}
                                tokenname={portfolioValues[2][1]['tokenname']}
                                tokensymbol={portfolioValues[2][1]['tokensymbol']}
                                url={portfolioValues[2][1]['imageUrl']}
                                pos={portfolioValues[2][1]['pos']}
                                locked={portfolioValues[2][1]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={2}
                                y={1}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[2][2] === undefined ? (
                            <Square x={2} y={2} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[2][2]['contract']}
                                id={portfolioValues[2][2]['id']}
                                tokenname={portfolioValues[2][2]['tokenname']}
                                tokensymbol={portfolioValues[2][2]['tokensymbol']}
                                url={portfolioValues[2][2]['imageUrl']}
                                pos={portfolioValues[2][2]['pos']}
                                locked={portfolioValues[2][2]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={2}
                                y={2}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[2][3] === undefined ? (
                            <Square x={2} y={3} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[2][3]['contract']}
                                id={portfolioValues[2][3]['id']}
                                tokenname={portfolioValues[2][3]['tokenname']}
                                tokensymbol={portfolioValues[2][3]['tokensymbol']}
                                url={portfolioValues[2][3]['imageUrl']}
                                pos={portfolioValues[2][3]['pos']}
                                locked={portfolioValues[2][3]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={2}
                                y={3}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[2][4] === undefined ? (
                            <Square x={2} y={4} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[2][4]['contract']}
                                id={portfolioValues[2][4]['id']}
                                tokenname={portfolioValues[2][4]['tokenname']}
                                tokensymbol={portfolioValues[2][4]['tokensymbol']}
                                url={portfolioValues[2][4]['imageUrl']}
                                pos={portfolioValues[2][4]['pos']}
                                locked={portfolioValues[2][4]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={2}
                                y={4}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                    <div className='pcol'>
                        {portfolioValues[2][5] === undefined ? (
                            <Square x={2} y={5} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                        ) : (
                            <NFT
                                contract={portfolioValues[2][5]['contract']}
                                id={portfolioValues[2][5]['id']}
                                tokenname={portfolioValues[2][5]['tokenname']}
                                tokensymbol={portfolioValues[2][5]['tokensymbol']}
                                url={portfolioValues[2][5]['imageUrl']}
                                pos={portfolioValues[2][5]['pos']}
                                locked={portfolioValues[2][5]['locked']}
                                dragHandler={dragHandler}
                                rightClickHandler={rightClickHandler}
                                x={2}
                                y={5}
                                mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                            />
                        )}
                    </div>
                </div>

                <div className='prow'>
                    <div className='pcol'>
                        <div className='pcol'>
                            {portfolioValues[3][0] === undefined ? (
                                <Square x={3} y={0} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                            ) : (
                                <NFT
                                    contract={portfolioValues[3][0]['contract']}
                                    id={portfolioValues[3][0]['id']}
                                    tokenname={portfolioValues[3][0]['tokenname']}
                                    tokensymbol={portfolioValues[3][0]['tokensymbol']}
                                    url={portfolioValues[3][0]['imageUrl']}
                                    pos={portfolioValues[3][0]['pos']}
                                    locked={portfolioValues[3][0]['locked']}
                                    dragHandler={dragHandler}
                                    rightClickHandler={rightClickHandler}
                                    x={3}
                                    y={0}
                                    mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                                />
                            )}
                        </div>
                    </div>
                    <div className='pcol'>
                        <div className='pcol'>
                            {portfolioValues[3][1] === undefined ? (
                                <Square x={3} y={1} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                            ) : (
                                <NFT
                                    contract={portfolioValues[3][1]['contract']}
                                    id={portfolioValues[3][1]['id']}
                                    tokenname={portfolioValues[3][1]['tokenname']}
                                    tokensymbol={portfolioValues[3][1]['tokensymbol']}
                                    url={portfolioValues[3][1]['imageUrl']}
                                    pos={portfolioValues[3][1]['pos']}
                                    locked={portfolioValues[3][1]['locked']}
                                    dragHandler={dragHandler}
                                    rightClickHandler={rightClickHandler}
                                    x={3}
                                    y={1}
                                    mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                                />
                            )}
                        </div>
                    </div>
                    <div className='pcol'>
                        <div className='pcol'>
                            {portfolioValues[3][2] === undefined ? (
                                <Square x={3} y={2} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                            ) : (
                                <NFT
                                    contract={portfolioValues[3][2]['contract']}
                                    id={portfolioValues[3][2]['id']}
                                    tokenname={portfolioValues[3][2]['tokenname']}
                                    tokensymbol={portfolioValues[3][2]['tokensymbol']}
                                    url={portfolioValues[3][2]['imageUrl']}
                                    pos={portfolioValues[3][2]['pos']}
                                    locked={portfolioValues[3][2]['locked']}
                                    dragHandler={dragHandler}
                                    rightClickHandler={rightClickHandler}
                                    x={3}
                                    y={2}
                                    mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                                />
                            )}
                        </div>
                    </div>
                    <div className='pcol'>
                        <div className='pcol'>
                            {portfolioValues[3][3] === undefined ? (
                                <Square x={3} y={3} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                            ) : (
                                <NFT
                                    contract={portfolioValues[3][3]['contract']}
                                    id={portfolioValues[3][3]['id']}
                                    tokenname={portfolioValues[3][3]['tokenname']}
                                    tokensymbol={portfolioValues[3][3]['tokensymbol']}
                                    url={portfolioValues[3][3]['imageUrl']}
                                    pos={portfolioValues[3][3]['pos']}
                                    locked={portfolioValues[3][3]['locked']}
                                    dragHandler={dragHandler}
                                    rightClickHandler={rightClickHandler}
                                    x={3}
                                    y={3}
                                    mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                                />
                            )}
                        </div>
                    </div>
                    <div className='pcol'>
                        <div className='pcol'>
                            {portfolioValues[3][4] === undefined ? (
                                <Square x={3} y={4} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                            ) : (
                                <NFT
                                    contract={portfolioValues[3][4]['contract']}
                                    id={portfolioValues[3][4]['id']}
                                    tokenname={portfolioValues[3][4]['tokenname']}
                                    tokensymbol={portfolioValues[3][4]['tokensymbol']}
                                    url={portfolioValues[3][4]['imageUrl']}
                                    pos={portfolioValues[3][4]['pos']}
                                    locked={portfolioValues[3][4]['locked']}
                                    dragHandler={dragHandler}
                                    rightClickHandler={rightClickHandler}
                                    x={3}
                                    y={4}
                                    mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                                />
                            )}
                        </div>
                    </div>
                    <div className='pcol'>
                        <div className='pcol'>
                            {portfolioValues[3][5] === undefined ? (
                                <Square x={3} y={5} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
                            ) : (
                                <NFT
                                    contract={portfolioValues[3][5]['contract']}
                                    id={portfolioValues[3][5]['id']}
                                    tokenname={portfolioValues[3][5]['tokenname']}
                                    tokensymbol={portfolioValues[3][5]['tokensymbol']}
                                    url={portfolioValues[3][5]['imageUrl']}
                                    pos={portfolioValues[3][5]['pos']}
                                    locked={portfolioValues[3][5]['locked']}
                                    dragHandler={dragHandler}
                                    rightClickHandler={rightClickHandler}
                                    x={3}
                                    y={5}
                                    mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={screenshot}>
                <input type='submit' value='Export' className='btn' />
            </form>
            <label style={{ fontSize: "14px", color:"gray" }}>Drag NFTs to an empty square for display. Right-click an NFT to hide it. Drag a placed NFT to an adjacent square to resize.</label><br />
        </div>
    )
}

export default MyPortfolio
