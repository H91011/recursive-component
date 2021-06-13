

function RecursiveComponent({styles, index}){
    
    return (
        index< styles.length ?
        <div>
        <div style= {{ backgroundColor: styles[index].color}}>
            {JSON.stringify(styles[index])}
        </div>
        <RecursiveComponent styles={styles} index={++index} ></RecursiveComponent>
        </div> 
        :
        null
    )

}

export default RecursiveComponent;