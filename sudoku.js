let puzzle = [[1, 0, 6, 0, 0, 2, 3, 0, 0],
			  [0, 5, 0, 0, 0, 6, 0, 9, 1],
			  [0, 0, 9, 5, 0, 1, 4, 6, 2],
			  [0, 3, 7, 9, 0, 5, 0, 0, 0],
			  [5, 8, 1, 0, 2, 7, 9, 0, 0],
			  [0, 0, 0, 4, 0, 8, 1, 5, 7],
			  [0, 0, 0, 2, 6, 0, 5, 4, 0],
			  [0, 0, 4, 1, 5, 0, 6, 0, 9],
			  [9, 0, 0, 8, 7, 4, 2, 1, 0],]

// console.log(puzzle[0].length);

function printPuzzle(puzzle){
	puzzle.forEach(row=>{
		row.forEach(element=>{
			console.log(element);
		})
	})
}

// printPuzzle(puzzle);
// console.log(findEmpty(puzzle));

function findEmpty(puzzle){
	for(let i=0; i<puzzle.length; i++){
		for(let j=0; j<puzzle[i].length; j++){
			if(puzzle[i][j] === 0){
				var position = {
					row: i,
					col: j
				}
				return position;
			}
		}
	}
	return 1;
}


function findValid(puzzle, number, position){

	// Check Rows
	for(let i=0; i<puzzle[0].length; i++)
	{
		if(puzzle[position.row][i] === number && position.col != i){
			return false;
		}
	}

	// Check Columns
	for(let i=0; i<puzzle.length; i++){
		if(puzzle[i][position.col] === number && position.row != i){
			return false;
		}
	}


	// Check Square Grid
	let boxX = Math.floor(position.row/3);
	let boxY = Math.floor(position.col/3);

	for(let i=boxX*3; i<((boxX*3)+3); i++){
		for(let j=boxY*3; j<((boxY*3)+3); j++){
			if(puzzle[i][j] === number && !samePosition(i, j, position)){
				return false;
			}
		}
	}
	return true;
}

function samePosition(i, j, position){
	if(i === position.row && j === position.col){
		return true;
	}else{
		return false;
	}
}

// console.log(findValid(puzzle, 1, {row: 3, col: 1}));

function solve(puzzle){

	if(findEmpty(puzzle) !== 1){
		var position = findEmpty(puzzle);
	} else {
		console.log(puzzle);
		return true;
	}

	for(let i=1; i<=9; i++){
		if(findValid(puzzle, i, position)){
			puzzle[position.row][position.col] = i;

			if(solve(puzzle)){
				return true;
			}

			puzzle[position.row][position.col] = 0;
		}
	}

	return false;
}

solve(puzzle);