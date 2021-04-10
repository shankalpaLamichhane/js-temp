function $(selector){
    const self={
        element: document.querySelector(selector),
        css: (name,value)=>{
            var col=":"
            self.element.style=name+col+value
        },
        on: (event,callback)=>{
            self.element.addEventListener(event,callback)
        },
        modifyClassName: (value)=>{
            self.element.className=value
        },
        getDataSet: () => {
            return self.element.dataset;
        },
        injectDom: () => {
            var root = document.createElement("p")
            var text = document.createTextNode("This looks great")
            root.appendChild(text)
            self.element.appendChild(root);
        },
        addAdditionalInformation: () => {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                if(this.readyState === 4){
                    console.log(request)
                    if(this.status === 200){
                        var additionalParagraph = document.createElement("p")
                        console.log(this.responseText)
                        additionalParagraph.appendChild(document.createTextNode(this.responseText))
                        self.element.appendChild(additionalParagraph)
                    }
                }
            }
            request.open('GET','https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt',true)
            request.send()
        },
        populateDetail: () => {
            let detail = document.createElement("p")
            detail.appendChild(document.createTextNode('input = '))
            self.element.appendChild()
        }
    }
    return self;
}