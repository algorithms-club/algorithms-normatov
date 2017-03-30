'use strick';

function getMinStonesToDell(numberOfStones, line){
let count=0;
let stones= line.split('');
for(var i=0;i<stones.length;i++)
	{
		for(var j=i+1;j<stones.length;j++)
			{
				if (stones[i]==stones[j]) {
					stones.splice(j,1);
					count++;
				}
			}		
	}
	
return count;

}

module.exports = {
	getMinStonesToDell
}