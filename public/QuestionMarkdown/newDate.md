## newDate 安卓版本问题

问题：安卓6.0版本 toLocaleDateString 显示有问题。如，1999-12-22显示为19991222。

解决方法：用new Date().getFullYear()+'-'+(new Date().getMonth+1)+'-'+new Date().getDate()

/替换为-：toLocaleDateString().replace(///g, '-');

可能有手机的手机设置是英文的，会导致的问题：年月日会显示为月日年。

解决方法：toLocaleDateString('zh') ps:暂时没用过，一般让用户把手机改为中文~"